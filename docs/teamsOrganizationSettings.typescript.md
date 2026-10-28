# `teamsOrganizationSettings` Submodule <a name="`teamsOrganizationSettings` Submodule" id="@cdktn/provider-newrelic.teamsOrganizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamsOrganizationSettings <a name="TeamsOrganizationSettings" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings newrelic_teams_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer"></a>

```typescript
import { teamsOrganizationSettings } from '@cdktn/provider-newrelic'

new teamsOrganizationSettings.TeamsOrganizationSettings(scope: Construct, id: string, config?: TeamsOrganizationSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig">TeamsOrganizationSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig">TeamsOrganizationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putHierarchyLevels">putHierarchyLevels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putSyncGroupRules">putSyncGroupRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetDiscoveryEnabled">resetDiscoveryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetDiscoveryTagKeys">resetDiscoveryTagKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetHierarchyLevels">resetHierarchyLevels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetSyncGroupRules">resetSyncGroupRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetSyncGroupsEnabled">resetSyncGroupsEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHierarchyLevels` <a name="putHierarchyLevels" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putHierarchyLevels"></a>

```typescript
public putHierarchyLevels(value: IResolvable | TeamsOrganizationSettingsHierarchyLevels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putHierarchyLevels.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>[]

---

##### `putSyncGroupRules` <a name="putSyncGroupRules" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putSyncGroupRules"></a>

```typescript
public putSyncGroupRules(value: TeamsOrganizationSettingsSyncGroupRules): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putSyncGroupRules.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a>

---

##### `resetDiscoveryEnabled` <a name="resetDiscoveryEnabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetDiscoveryEnabled"></a>

```typescript
public resetDiscoveryEnabled(): void
```

##### `resetDiscoveryTagKeys` <a name="resetDiscoveryTagKeys" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetDiscoveryTagKeys"></a>

```typescript
public resetDiscoveryTagKeys(): void
```

##### `resetHierarchyLevels` <a name="resetHierarchyLevels" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetHierarchyLevels"></a>

```typescript
public resetHierarchyLevels(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSyncGroupRules` <a name="resetSyncGroupRules" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetSyncGroupRules"></a>

```typescript
public resetSyncGroupRules(): void
```

##### `resetSyncGroupsEnabled` <a name="resetSyncGroupsEnabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetSyncGroupsEnabled"></a>

```typescript
public resetSyncGroupsEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TeamsOrganizationSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isConstruct"></a>

```typescript
import { teamsOrganizationSettings } from '@cdktn/provider-newrelic'

teamsOrganizationSettings.TeamsOrganizationSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformElement"></a>

```typescript
import { teamsOrganizationSettings } from '@cdktn/provider-newrelic'

teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformResource"></a>

```typescript
import { teamsOrganizationSettings } from '@cdktn/provider-newrelic'

teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport"></a>

```typescript
import { teamsOrganizationSettings } from '@cdktn/provider-newrelic'

teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TeamsOrganizationSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TeamsOrganizationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TeamsOrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TeamsOrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.hierarchyLevels">hierarchyLevels</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList">TeamsOrganizationSettingsHierarchyLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupRules">syncGroupRules</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference">TeamsOrganizationSettingsSyncGroupRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryEnabledInput">discoveryEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryTagKeysInput">discoveryTagKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.hierarchyLevelsInput">hierarchyLevelsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupRulesInput">syncGroupRulesInput</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupsEnabledInput">syncGroupsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryEnabled">discoveryEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryTagKeys">discoveryTagKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupsEnabled">syncGroupsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `hierarchyLevels`<sup>Required</sup> <a name="hierarchyLevels" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.hierarchyLevels"></a>

```typescript
public readonly hierarchyLevels: TeamsOrganizationSettingsHierarchyLevelsList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList">TeamsOrganizationSettingsHierarchyLevelsList</a>

---

##### `syncGroupRules`<sup>Required</sup> <a name="syncGroupRules" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupRules"></a>

```typescript
public readonly syncGroupRules: TeamsOrganizationSettingsSyncGroupRulesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference">TeamsOrganizationSettingsSyncGroupRulesOutputReference</a>

---

##### `discoveryEnabledInput`<sup>Optional</sup> <a name="discoveryEnabledInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryEnabledInput"></a>

```typescript
public readonly discoveryEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `discoveryTagKeysInput`<sup>Optional</sup> <a name="discoveryTagKeysInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryTagKeysInput"></a>

```typescript
public readonly discoveryTagKeysInput: string[];
```

- *Type:* string[]

---

##### `hierarchyLevelsInput`<sup>Optional</sup> <a name="hierarchyLevelsInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.hierarchyLevelsInput"></a>

```typescript
public readonly hierarchyLevelsInput: IResolvable | TeamsOrganizationSettingsHierarchyLevels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `syncGroupRulesInput`<sup>Optional</sup> <a name="syncGroupRulesInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupRulesInput"></a>

```typescript
public readonly syncGroupRulesInput: TeamsOrganizationSettingsSyncGroupRules;
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a>

---

##### `syncGroupsEnabledInput`<sup>Optional</sup> <a name="syncGroupsEnabledInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupsEnabledInput"></a>

```typescript
public readonly syncGroupsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `discoveryEnabled`<sup>Required</sup> <a name="discoveryEnabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryEnabled"></a>

```typescript
public readonly discoveryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `discoveryTagKeys`<sup>Required</sup> <a name="discoveryTagKeys" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryTagKeys"></a>

```typescript
public readonly discoveryTagKeys: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `syncGroupsEnabled`<sup>Required</sup> <a name="syncGroupsEnabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupsEnabled"></a>

```typescript
public readonly syncGroupsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamsOrganizationSettingsConfig <a name="TeamsOrganizationSettingsConfig" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.Initializer"></a>

```typescript
import { teamsOrganizationSettings } from '@cdktn/provider-newrelic'

const teamsOrganizationSettingsConfig: teamsOrganizationSettings.TeamsOrganizationSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.discoveryEnabled">discoveryEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether tag-based entity discovery is enabled. When true, entities with a matching tag are automatically assigned to teams. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.discoveryTagKeys">discoveryTagKeys</a></code> | <code>string[]</code> | Tag keys used for entity discovery (e.g. ["team"]). Entities with these tags are auto-assigned to the team whose name or alias matches the tag value. Must contain at least one key when declared. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.hierarchyLevels">hierarchyLevels</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>[]</code> | hierarchy_levels block. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#id TeamsOrganizationSettings#id}. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.syncGroupRules">syncGroupRules</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a></code> | sync_group_rules block. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.syncGroupsEnabled">syncGroupsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether automatic team creation from IdP groups is enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `discoveryEnabled`<sup>Optional</sup> <a name="discoveryEnabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.discoveryEnabled"></a>

```typescript
public readonly discoveryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether tag-based entity discovery is enabled. When true, entities with a matching tag are automatically assigned to teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#discovery_enabled TeamsOrganizationSettings#discovery_enabled}

---

##### `discoveryTagKeys`<sup>Optional</sup> <a name="discoveryTagKeys" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.discoveryTagKeys"></a>

```typescript
public readonly discoveryTagKeys: string[];
```

- *Type:* string[]

Tag keys used for entity discovery (e.g. ["team"]). Entities with these tags are auto-assigned to the team whose name or alias matches the tag value. Must contain at least one key when declared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#discovery_tag_keys TeamsOrganizationSettings#discovery_tag_keys}

---

##### `hierarchyLevels`<sup>Optional</sup> <a name="hierarchyLevels" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.hierarchyLevels"></a>

```typescript
public readonly hierarchyLevels: IResolvable | TeamsOrganizationSettingsHierarchyLevels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>[]

hierarchy_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#hierarchy_levels TeamsOrganizationSettings#hierarchy_levels}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#id TeamsOrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `syncGroupRules`<sup>Optional</sup> <a name="syncGroupRules" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.syncGroupRules"></a>

```typescript
public readonly syncGroupRules: TeamsOrganizationSettingsSyncGroupRules;
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a>

sync_group_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#sync_group_rules TeamsOrganizationSettings#sync_group_rules}

---

##### `syncGroupsEnabled`<sup>Optional</sup> <a name="syncGroupsEnabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.syncGroupsEnabled"></a>

```typescript
public readonly syncGroupsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether automatic team creation from IdP groups is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#sync_groups_enabled TeamsOrganizationSettings#sync_groups_enabled}

---

### TeamsOrganizationSettingsHierarchyLevels <a name="TeamsOrganizationSettingsHierarchyLevels" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels.Initializer"></a>

```typescript
import { teamsOrganizationSettings } from '@cdktn/provider-newrelic'

const teamsOrganizationSettingsHierarchyLevels: teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels.property.id">id</a></code> | <code>string</code> | GUID of the hierarchy level entity. Obtain from the newrelic_teams_hierarchy_levels data source. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels.property.name">name</a></code> | <code>string</code> | Display name of this hierarchy level (e.g. 'Division', 'Squad'). Renaming here updates the entity in the API. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

GUID of the hierarchy level entity. Obtain from the newrelic_teams_hierarchy_levels data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#id TeamsOrganizationSettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Display name of this hierarchy level (e.g. 'Division', 'Squad'). Renaming here updates the entity in the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#name TeamsOrganizationSettings#name}

---

### TeamsOrganizationSettingsSyncGroupRules <a name="TeamsOrganizationSettingsSyncGroupRules" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules.Initializer"></a>

```typescript
import { teamsOrganizationSettings } from '@cdktn/provider-newrelic'

const teamsOrganizationSettingsSyncGroupRules: teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>[]</code> | conditions block. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | TeamsOrganizationSettingsSyncGroupRulesConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#conditions TeamsOrganizationSettings#conditions}

---

### TeamsOrganizationSettingsSyncGroupRulesConditions <a name="TeamsOrganizationSettingsSyncGroupRulesConditions" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions.Initializer"></a>

```typescript
import { teamsOrganizationSettings } from '@cdktn/provider-newrelic'

const teamsOrganizationSettingsSyncGroupRulesConditions: teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions.property.type">type</a></code> | <code>string</code> | Match type: STARTS_WITH, ENDS_WITH, or CONTAINS. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions.property.value">value</a></code> | <code>string</code> | The string to match against the group name. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Match type: STARTS_WITH, ENDS_WITH, or CONTAINS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#type TeamsOrganizationSettings#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The string to match against the group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#value TeamsOrganizationSettings#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamsOrganizationSettingsHierarchyLevelsList <a name="TeamsOrganizationSettingsHierarchyLevelsList" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer"></a>

```typescript
import { teamsOrganizationSettings } from '@cdktn/provider-newrelic'

new teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.get"></a>

```typescript
public get(index: number): TeamsOrganizationSettingsHierarchyLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TeamsOrganizationSettingsHierarchyLevels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>[]

---


### TeamsOrganizationSettingsHierarchyLevelsOutputReference <a name="TeamsOrganizationSettingsHierarchyLevelsOutputReference" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer"></a>

```typescript
import { teamsOrganizationSettings } from '@cdktn/provider-newrelic'

new teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TeamsOrganizationSettingsHierarchyLevels;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>

---


### TeamsOrganizationSettingsSyncGroupRulesConditionsList <a name="TeamsOrganizationSettingsSyncGroupRulesConditionsList" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer"></a>

```typescript
import { teamsOrganizationSettings } from '@cdktn/provider-newrelic'

new teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.get"></a>

```typescript
public get(index: number): TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TeamsOrganizationSettingsSyncGroupRulesConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>[]

---


### TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference <a name="TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer"></a>

```typescript
import { teamsOrganizationSettings } from '@cdktn/provider-newrelic'

new teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TeamsOrganizationSettingsSyncGroupRulesConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>

---


### TeamsOrganizationSettingsSyncGroupRulesOutputReference <a name="TeamsOrganizationSettingsSyncGroupRulesOutputReference" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.Initializer"></a>

```typescript
import { teamsOrganizationSettings } from '@cdktn/provider-newrelic'

new teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.putConditions">putConditions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | TeamsOrganizationSettingsSyncGroupRulesConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList">TeamsOrganizationSettingsSyncGroupRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.conditions"></a>

```typescript
public readonly conditions: TeamsOrganizationSettingsSyncGroupRulesConditionsList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList">TeamsOrganizationSettingsSyncGroupRulesConditionsList</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | TeamsOrganizationSettingsSyncGroupRulesConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TeamsOrganizationSettingsSyncGroupRules;
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a>

---



