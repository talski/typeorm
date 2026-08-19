const fs = require("fs")
const path = require("path")

const root = process.cwd()
const pkg = path.join(root, "build", "package")

for (const file of fs.readdirSync(pkg)) {
    if (file === "package.json") continue

    const source = path.join(pkg, file)
    const target = path.join(root, file)

    fs.cpSync(source, target, { recursive: true, force: true })
}
