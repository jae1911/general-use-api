import { env } from 'process';

import dotenv from 'dotenv';

dotenv.config();

export const PRODUCTION: boolean = env.NODE_ENV === 'production';
export const HOST: string = env.HOST ?? '::';

export const LIBRETRANSLATE_DOMAIN: string = env.LBRTRS_DOMAIN ?? '';
