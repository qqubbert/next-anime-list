#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/8b7df7804b58fa66649f8cc3211da666803aebfbcfe7e3685e55e23f6c6c902f/contract';
import endContract from '../../snapshots/8b7df7804b58fa66649f8cc3211da666803aebfbcfe7e3685e55e23f6c6c902f/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [];
  }
}

MigrationCLI.run(import.meta.url, M);
