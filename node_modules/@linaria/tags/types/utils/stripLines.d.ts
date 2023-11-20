import type { Location } from '@linaria/utils';
export default function stripLines(loc: {
    end: Location;
    start: Location;
}, text: string | number): string;
