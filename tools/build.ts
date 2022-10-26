import fs from "fs-extra";
import { readPackageUpSync } from "read-pkg-up";
import shell from "shelljs";

const aliases = (await fs.readdir("./src/", { withFileTypes: true })).filter(f => f.isDirectory()).map(f => f.name);

for (const alias of aliases) {
	await fs.writeJson(`./${ alias }/package.json`, {
		"name": `${ readPackageUpSync()!.packageJson.name }/${ alias }`,
		"types": `../dist/types/${ alias }/index.d.ts`,
		"sideEffects": false,
		"private": true,
	}, { spaces: "\t" });
}