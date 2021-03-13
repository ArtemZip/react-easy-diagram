import { BoundingBox, Dictionary, Point } from '../types/common';
import { makeAutoObservable } from 'mobx';
import { INodeState, NodeState } from './nodeState';
import { RootStore } from './rootStore';
import { guidForcedUniqueness, subtractPoints } from '../utils';

export class NodesStore {
  private _nodes: Dictionary<NodeState> = {};

  private _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this._rootStore = rootStore;
  }

  get nodes(): Readonly<Dictionary<NodeState>> {
    return this._nodes;
  }

  import = (newNodes?: INodeState[]) => {
    this._nodes = {};
    newNodes?.forEach((node) => this.addNode(node, true));
  };

  export = (): INodeState[] =>
    Object.values(this._nodes).map((n) => n.export());

  addNode = (node: INodeState, rewriteIfExists: boolean): boolean => {
    if (!node || (!rewriteIfExists && node.id && this._nodes[node.id])) {
      return false;
    }
    const newNode = new NodeState(
      this._rootStore,
      node.id ?? guidForcedUniqueness(this._nodes),
      node
    );
    this._nodes[newNode.id] = newNode;
    return true;
  };

  removeNode = (nodeId: string): boolean => {
    if (nodeId && this._nodes[nodeId]) {
      delete this._nodes[nodeId];
      this._rootStore.linksStore.removeNodeLinks(nodeId);
      return true;
    }
    return false;
  };

  getNode = (nodeId: string): NodeState | undefined => {
    if (nodeId && this._nodes[nodeId]) {
      return this._nodes[nodeId];
    } else return undefined;
  };

  getNodeOrThrowException = (nodeId: string): NodeState => {
    const node = this.getNode(nodeId);
    if (node) return node;
    else throw `Node with id '${nodeId}' does not exist`;
  };

  /**
   * @returns Values are calculated without zoom taking into account, that is, the same as zoom would be '1'
   */
  getNodesBoundingBox = (): BoundingBox => {
    const topLeftCorner: Point = [
      Number.POSITIVE_INFINITY,
      Number.POSITIVE_INFINITY,
    ];
    const bottomRightCorner: Point = [
      Number.NEGATIVE_INFINITY,
      Number.NEGATIVE_INFINITY,
    ];

    Object.values(this._rootStore.nodesStore.nodes).forEach((node) => {
      const pos = node.position;
      const size = node.realSize ?? [1, 1];

      topLeftCorner[0] = Math.min(topLeftCorner[0], pos[0]);
      topLeftCorner[1] = Math.min(topLeftCorner[1], pos[1]);

      bottomRightCorner[0] = Math.max(bottomRightCorner[0], pos[0] + size[0]);
      bottomRightCorner[1] = Math.max(bottomRightCorner[1], pos[1] + size[1]);
    });

    return {
      topLeftCorner,
      bottomRightCorner,
      size: subtractPoints(bottomRightCorner, topLeftCorner),
    };
  };
}
