// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
import { assertEquals } from "../assert/mod.ts";
import { joinGlobs } from "./join_globs.ts";
import { SEP } from "./mod.ts";

Deno.test("joinGlobs() checks options.globstar", function () {
  assertEquals(joinGlobs(["**", ".."], { globstar: true }), `**${SEP}..`);
});
