# `fleetConfiguration` Submodule <a name="`fleetConfiguration` Submodule" id="@cdktn/provider-newrelic.fleetConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetConfiguration <a name="FleetConfiguration" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration newrelic_fleet_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer"></a>

```typescript
import { fleetConfiguration } from '@cdktn/provider-newrelic'

new fleetConfiguration.FleetConfiguration(scope: Construct, id: string, config: FleetConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig">FleetConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig">FleetConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.putVersion">putVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOperatingSystem">resetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOrganizationId">resetOrganizationId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putVersion` <a name="putVersion" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.putVersion"></a>

```typescript
public putVersion(value: IResolvable | FleetConfigurationVersion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.putVersion.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>[]

---

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOperatingSystem` <a name="resetOperatingSystem" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOperatingSystem"></a>

```typescript
public resetOperatingSystem(): void
```

##### `resetOrganizationId` <a name="resetOrganizationId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.resetOrganizationId"></a>

```typescript
public resetOrganizationId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FleetConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isConstruct"></a>

```typescript
import { fleetConfiguration } from '@cdktn/provider-newrelic'

fleetConfiguration.FleetConfiguration.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformElement"></a>

```typescript
import { fleetConfiguration } from '@cdktn/provider-newrelic'

fleetConfiguration.FleetConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformResource"></a>

```typescript
import { fleetConfiguration } from '@cdktn/provider-newrelic'

fleetConfiguration.FleetConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport"></a>

```typescript
import { fleetConfiguration } from '@cdktn/provider-newrelic'

fleetConfiguration.FleetConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FleetConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FleetConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FleetConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FleetConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.configurationId">configurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.latestVersionEntityId">latestVersionEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.latestVersionNumber">latestVersionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.totalVersions">totalVersions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.version">version</a></code> | <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList">FleetConfigurationVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.agentTypeInput">agentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.managedEntityTypeInput">managedEntityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.operatingSystemInput">operatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.organizationIdInput">organizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.versionInput">versionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.agentType">agentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.managedEntityType">managedEntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

---

##### `latestVersionEntityId`<sup>Required</sup> <a name="latestVersionEntityId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.latestVersionEntityId"></a>

```typescript
public readonly latestVersionEntityId: string;
```

- *Type:* string

---

##### `latestVersionNumber`<sup>Required</sup> <a name="latestVersionNumber" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.latestVersionNumber"></a>

```typescript
public readonly latestVersionNumber: number;
```

- *Type:* number

---

##### `totalVersions`<sup>Required</sup> <a name="totalVersions" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.totalVersions"></a>

```typescript
public readonly totalVersions: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.version"></a>

```typescript
public readonly version: FleetConfigurationVersionList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList">FleetConfigurationVersionList</a>

---

##### `agentTypeInput`<sup>Optional</sup> <a name="agentTypeInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.agentTypeInput"></a>

```typescript
public readonly agentTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedEntityTypeInput`<sup>Optional</sup> <a name="managedEntityTypeInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.managedEntityTypeInput"></a>

```typescript
public readonly managedEntityTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.operatingSystemInput"></a>

```typescript
public readonly operatingSystemInput: string;
```

- *Type:* string

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.organizationIdInput"></a>

```typescript
public readonly organizationIdInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.versionInput"></a>

```typescript
public readonly versionInput: IResolvable | FleetConfigurationVersion[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>[]

---

##### `agentType`<sup>Required</sup> <a name="agentType" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.agentType"></a>

```typescript
public readonly agentType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedEntityType`<sup>Required</sup> <a name="managedEntityType" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.managedEntityType"></a>

```typescript
public readonly managedEntityType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FleetConfigurationConfig <a name="FleetConfigurationConfig" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.Initializer"></a>

```typescript
import { fleetConfiguration } from '@cdktn/provider-newrelic'

const fleetConfigurationConfig: fleetConfiguration.FleetConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.agentType">agentType</a></code> | <code>string</code> | The type of agent this configuration is for. Allowed values: NRInfra, NRDOT, FluentBit, NRPrometheusAgent. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.managedEntityType">managedEntityType</a></code> | <code>string</code> | The type of entities this configuration manages. Allowed values: HOST, KUBERNETESCLUSTER. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.name">name</a></code> | <code>string</code> | The name of the configuration. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.version">version</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>[]</code> | version block. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#id FleetConfiguration#id}. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | The operating system this configuration targets. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.organizationId">organizationId</a></code> | <code>string</code> | The organization ID. Auto-fetched from the account if not provided. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentType`<sup>Required</sup> <a name="agentType" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.agentType"></a>

```typescript
public readonly agentType: string;
```

- *Type:* string

The type of agent this configuration is for. Allowed values: NRInfra, NRDOT, FluentBit, NRPrometheusAgent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#agent_type FleetConfiguration#agent_type}

---

##### `managedEntityType`<sup>Required</sup> <a name="managedEntityType" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.managedEntityType"></a>

```typescript
public readonly managedEntityType: string;
```

- *Type:* string

The type of entities this configuration manages. Allowed values: HOST, KUBERNETESCLUSTER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#managed_entity_type FleetConfiguration#managed_entity_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#name FleetConfiguration#name}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.version"></a>

```typescript
public readonly version: IResolvable | FleetConfigurationVersion[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>[]

version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#version FleetConfiguration#version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#id FleetConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

The operating system this configuration targets.

Required for HOST configurations. Allowed values: LINUX, WINDOWS. Must not be set for KUBERNETESCLUSTER configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#operating_system FleetConfiguration#operating_system}

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationConfig.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The organization ID. Auto-fetched from the account if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#organization_id FleetConfiguration#organization_id}

---

### FleetConfigurationVersion <a name="FleetConfigurationVersion" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion.Initializer"></a>

```typescript
import { fleetConfiguration } from '@cdktn/provider-newrelic'

const fleetConfigurationVersion: fleetConfiguration.FleetConfigurationVersion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion.property.configurationContent">configurationContent</a></code> | <code>string</code> | Configuration content for this version (YAML or JSON). |

---

##### `configurationContent`<sup>Required</sup> <a name="configurationContent" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion.property.configurationContent"></a>

```typescript
public readonly configurationContent: string;
```

- *Type:* string

Configuration content for this version (YAML or JSON).

Content must be unique across version blocks. Use file() to load from a file: file("${path.module}/config.yaml").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.91.0/docs/resources/fleet_configuration#configuration_content FleetConfiguration#configuration_content}

---

## Classes <a name="Classes" id="Classes"></a>

### FleetConfigurationVersionList <a name="FleetConfigurationVersionList" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.Initializer"></a>

```typescript
import { fleetConfiguration } from '@cdktn/provider-newrelic'

new fleetConfiguration.FleetConfigurationVersionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.get"></a>

```typescript
public get(index: number): FleetConfigurationVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FleetConfigurationVersion[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>[]

---


### FleetConfigurationVersionOutputReference <a name="FleetConfigurationVersionOutputReference" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer"></a>

```typescript
import { fleetConfiguration } from '@cdktn/provider-newrelic'

new fleetConfiguration.FleetConfigurationVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.versionEntityId">versionEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.versionNumber">versionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.configurationContentInput">configurationContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.configurationContent">configurationContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `versionEntityId`<sup>Required</sup> <a name="versionEntityId" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.versionEntityId"></a>

```typescript
public readonly versionEntityId: string;
```

- *Type:* string

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.versionNumber"></a>

```typescript
public readonly versionNumber: number;
```

- *Type:* number

---

##### `configurationContentInput`<sup>Optional</sup> <a name="configurationContentInput" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.configurationContentInput"></a>

```typescript
public readonly configurationContentInput: string;
```

- *Type:* string

---

##### `configurationContent`<sup>Required</sup> <a name="configurationContent" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.configurationContent"></a>

```typescript
public readonly configurationContent: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FleetConfigurationVersion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.fleetConfiguration.FleetConfigurationVersion">FleetConfigurationVersion</a>

---



