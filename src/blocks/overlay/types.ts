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

interface OverlayProps {
  isOpen: boolean;
}

interface DrawerProps {
  isOpen: boolean;
  position?: DrawerPosition;
  size?: DrawerSize;
}

interface PopoverProps {
  dismissable?: boolean;
  showCloseIcon?: boolean;
}

type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';

type DrawerSize = 'sm' | 'md' | 'lg' | 'full';

export type {
  ArrowDirection,
  Placement,
  PlacementResult,
  PlacementCandidate,
  DrawerPosition,
  DrawerSize,
  OverlayProps,
  DrawerProps,
  PopoverProps,
};
