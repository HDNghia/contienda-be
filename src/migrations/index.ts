import * as migration_20241124_051257_init from './20241124_051257_init';

export const migrations = [
  {
    up: migration_20241124_051257_init.up,
    down: migration_20241124_051257_init.down,
    name: '20241124_051257_init'
  },
];
