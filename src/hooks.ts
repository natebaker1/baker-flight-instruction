import type { Reroute } from '@sveltejs/kit';
import { legacyRoutes } from '#lib/navigation.js';

export const reroute: Reroute = ({ url }) => legacyRoutes[url.pathname];
