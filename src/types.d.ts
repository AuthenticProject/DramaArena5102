declare namespace React {
  export type ReactNode = any;
  export type FC<P = {}> = any;
  export type ComponentType<P = {}> = any;
  export type ReactElement<P = any, T = any> = any;
  export type MouseEvent<T = any> = any;
  export type FormEvent<T = any> = any;
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useRef<T>(initialValue?: T | null): { current: T };
  export function useMemo<T>(factory: () => T, deps: any[]): T;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: any[]): T;
  export const StrictMode: any;
}

declare module 'react' {
  export = React;
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'react/jsx-dev-runtime' {
  export const jsxDEV: any;
  export const Fragment: any;
}

declare module 'react-dom' {
  export const createRoot: any;
  export function render(...args: any[]): any;
}

declare module 'react-dom/client' {
  export const createRoot: any;
}

declare module 'framer-motion' {
  export const motion: any;
  export const AnimatePresence: any;
  export const useScroll: any;
  export const useTransform: any;
  export type MotionValue<T = any> = any;
}

declare module 'lucide-react' {
  export const Sparkles: any;
  export const Calendar: any;
  export const MapPin: any;
  export const Users: any;
  export const DollarSign: any;
  export const BookOpen: any;
  export const Building2: any;
  export const ShieldCheck: any;
  export const Layers: any;
  export const Zap: any;
  export const Sliders: any;
  export const X: any;
  export const CheckCircle: any;
  export const Phone: any;
  export const Mail: any;
  export const Globe: any;
  export const Instagram: any;
  export const CheckCircle2: any;
  export const HeartHandshake: any;
  export const Music: any;
  export const Drama: any;
  export const Award: any;
  export const ChevronRight: any;
  export const Building: any;
  export const CreditCard: any;
  export const Star: any;
  export const Check: any;
  export const Menu: any;
}

export interface ShowCategoryData {
  id: string;
  number: string;
  category: string;
  title: string;
  items: string[];
  img: string;
}

export interface CommitteeGroup {
  role: string;
  names: string[];
}

export interface BudgetItem {
  no: number;
  section: string;
  amount: string;
}

export interface SponsorTier {
  tier: string;
  pct: string;
  amount: string;
  perks: string[];
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    interface Element extends React.ReactElement<any, any> {}
  }
}
