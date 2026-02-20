type ArrowDirection = 'top' | 'bottom' | 'left' | 'right';
type Placement = 'top' | 'bottom' | 'left' | 'right';

interface PlacementResult {
  top: number;
  left: number;
  arrow: ArrowDirection;
  placement: Placement;
}

interface PlacementCandidate {
  top: number;
  left: number;
  arrow: ArrowDirection;
}

export type { ArrowDirection, Placement, PlacementResult, PlacementCandidate };
