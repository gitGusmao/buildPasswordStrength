"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackageVersionFromPackageJson = exports.addModuleToImports = exports.installPackageJsonDependencies = exports.addPackageJsonDependencies = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const helpers_1 = require("../helpers");
const config_1 = require("@schematics/angular/utility/config");
const schematics_2 = require("@angular/cdk/schematics");
/** Loads the full version from the given Angular package gracefully. */
function loadPackageVersionGracefully(context) {
    try {
        context.logger.log('info', `🧟‍ @angular-material-extensions/password-strength
     is using the following version ${require(`../../package.json`).version}`);
        return require(`../../package.json`).version;
    }
    catch (_a) {
        return null;
    }
}
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
function addPackageJsonDependencies() {
    return (host, context) => {
        const ngCoreVersionTag = getPackageVersionFromPackageJson(host, '@angular/core');
        const dependencies = [
            {
                type: helpers_1.NodeDependencyType.Default,
                version: loadPackageVersionGracefully(context) || 'latest',
                name: '@angular-material-extensions/password-strength'
            },
            { type: helpers_1.NodeDependencyType.Default, version: ngCoreVersionTag || '^9.0.0', name: '@angular/animations' },
            { type: helpers_1.NodeDependencyType.Default, version: ngCoreVersionTag || '^9.0.0', name: '@angular/forms' }
        ];
        dependencies.forEach(dependency => {
            (0, helpers_1.addPackageJsonDependency)(host, dependency);
            context.logger.log('info', `✅️ Added "${dependency.name}" into ${dependency.type}`);
        });
        return host;
    };
}
exports.addPackageJsonDependencies = addPackageJsonDependencies;
function installPackageJsonDependencies() {
    return (host, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
        context.logger.log('info', `🔍 Installing packages...`);
        return host;
    };
}
exports.installPackageJsonDependencies = installPackageJsonDependencies;
function addModuleToImports(options) {
    return (host, context) => {
        const workspace = (0, config_1.getWorkspace)(host);
        // @ts-ignore
        const project = (0, schematics_2.getProjectFromWorkspace)(workspace, options.project);
        const moduleName = 'MatPasswordStrengthModule';
        (0, schematics_2.addModuleImportToRootModule)(host, moduleName, '@angular-material-extensions/password-strength', project);
        context.logger.log('info', `✅️ "${moduleName}" is imported`);
        return host;
    };
}
exports.addModuleToImports = addModuleToImports;
/** Gets the version of the specified package by looking at the package.json in the given tree. */
function getPackageVersionFromPackageJson(tree, name) {
    if (!tree.exists('package.json')) {
        return null;
    }
    const packageJson = JSON.parse(tree.read('package.json').toString('utf8'));
    if (packageJson.dependencies && packageJson.dependencies[name]) {
        return packageJson.dependencies[name];
    }
    return null;
}
exports.getPackageVersionFromPackageJson = getPackageVersionFromPackageJson;
function default_1(options) {
    return (0, schematics_1.chain)([
        options && options.skipPackageJson ? (0, schematics_1.noop)() : addPackageJsonDependencies(),
        options && options.skipPackageJson ? (0, schematics_1.noop)() : installPackageJsonDependencies(),
        options && options.skipModuleImport ? (0, schematics_1.noop)() : addModuleToImports(options),
    ]);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map