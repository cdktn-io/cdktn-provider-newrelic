# `pathpointFlow` Submodule <a name="`pathpointFlow` Submodule" id="@cdktn/provider-newrelic.pathpointFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PathpointFlow <a name="PathpointFlow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow newrelic_pathpoint_flow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlow(scope: Construct, id: string, config: PathpointFlowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig">PathpointFlowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig">PathpointFlowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putKpis">putKpis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putStages">putStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetHealthRollup">resetHealthRollup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetKpis">resetKpis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetRefreshInterval">resetRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetStages">resetStages</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKpis` <a name="putKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putKpis"></a>

```typescript
public putKpis(value: IResolvable | PathpointFlowKpis[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putKpis.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>[]

---

##### `putStages` <a name="putStages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putStages"></a>

```typescript
public putStages(value: IResolvable | PathpointFlowStages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putStages.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetCategory` <a name="resetCategory" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetCategory"></a>

```typescript
public resetCategory(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHealthRollup` <a name="resetHealthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetHealthRollup"></a>

```typescript
public resetHealthRollup(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKpis` <a name="resetKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetKpis"></a>

```typescript
public resetKpis(): void
```

##### `resetRefreshInterval` <a name="resetRefreshInterval" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetRefreshInterval"></a>

```typescript
public resetRefreshInterval(): void
```

##### `resetStages` <a name="resetStages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetStages"></a>

```typescript
public resetStages(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PathpointFlow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isConstruct"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

pathpointFlow.PathpointFlow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformElement"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

pathpointFlow.PathpointFlow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformResource"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

pathpointFlow.PathpointFlow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

pathpointFlow.PathpointFlow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PathpointFlow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PathpointFlow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PathpointFlow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PathpointFlow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.kpis">kpis</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList">PathpointFlowKpisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.stages">stages</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList">PathpointFlowStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.healthRollupInput">healthRollupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.kpisInput">kpisInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.refreshIntervalInput">refreshIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.stagesInput">stagesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.healthRollup">healthRollup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.refreshInterval">refreshInterval</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `kpis`<sup>Required</sup> <a name="kpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.kpis"></a>

```typescript
public readonly kpis: PathpointFlowKpisList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList">PathpointFlowKpisList</a>

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.stages"></a>

```typescript
public readonly stages: PathpointFlowStagesList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList">PathpointFlowStagesList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `healthRollupInput`<sup>Optional</sup> <a name="healthRollupInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.healthRollupInput"></a>

```typescript
public readonly healthRollupInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kpisInput`<sup>Optional</sup> <a name="kpisInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.kpisInput"></a>

```typescript
public readonly kpisInput: IResolvable | PathpointFlowKpis[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `refreshIntervalInput`<sup>Optional</sup> <a name="refreshIntervalInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.refreshIntervalInput"></a>

```typescript
public readonly refreshIntervalInput: string;
```

- *Type:* string

---

##### `stagesInput`<sup>Optional</sup> <a name="stagesInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.stagesInput"></a>

```typescript
public readonly stagesInput: IResolvable | PathpointFlowStages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `healthRollup`<sup>Required</sup> <a name="healthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.healthRollup"></a>

```typescript
public readonly healthRollup: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.refreshInterval"></a>

```typescript
public readonly refreshInterval: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PathpointFlowConfig <a name="PathpointFlowConfig" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

const pathpointFlowConfig: pathpointFlow.PathpointFlowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.name">name</a></code> | <code>string</code> | Display name of the Pathpoint flow. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.accountId">accountId</a></code> | <code>number</code> | The New Relic account ID that owns this Pathpoint flow. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.category">category</a></code> | <code>string</code> | Optional category used to group flows (e.g. Marketing, Checkout). |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.description">description</a></code> | <code>string</code> | Optional description of the flow. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.healthRollup">healthRollup</a></code> | <code>string</code> | Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#id PathpointFlow#id}. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.kpis">kpis</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>[]</code> | kpis block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.refreshInterval">refreshInterval</a></code> | <code>string</code> | How often health statuses refresh: ONE_MINUTE, FIVE_MINUTES, TEN_MINUTES, FIFTEEN_MINUTES, THIRTY_MINUTES. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.stages">stages</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>[]</code> | stages block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Display name of the Pathpoint flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The New Relic account ID that owns this Pathpoint flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#account_id PathpointFlow#account_id}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Optional category used to group flows (e.g. Marketing, Checkout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#category PathpointFlow#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional description of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#description PathpointFlow#description}

---

##### `healthRollup`<sup>Optional</sup> <a name="healthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.healthRollup"></a>

```typescript
public readonly healthRollup: string;
```

- *Type:* string

Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#health_rollup PathpointFlow#health_rollup}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#id PathpointFlow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kpis`<sup>Optional</sup> <a name="kpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.kpis"></a>

```typescript
public readonly kpis: IResolvable | PathpointFlowKpis[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>[]

kpis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#kpis PathpointFlow#kpis}

---

##### `refreshInterval`<sup>Optional</sup> <a name="refreshInterval" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.refreshInterval"></a>

```typescript
public readonly refreshInterval: string;
```

- *Type:* string

How often health statuses refresh: ONE_MINUTE, FIVE_MINUTES, TEN_MINUTES, FIFTEEN_MINUTES, THIRTY_MINUTES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#refresh_interval PathpointFlow#refresh_interval}

---

##### `stages`<sup>Optional</sup> <a name="stages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.stages"></a>

```typescript
public readonly stages: IResolvable | PathpointFlowStages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>[]

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#stages PathpointFlow#stages}

---

### PathpointFlowKpis <a name="PathpointFlowKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

const pathpointFlowKpis: pathpointFlow.PathpointFlowKpis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.name">name</a></code> | <code>string</code> | Display name of the KPI. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.query">query</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a></code> | query block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.accountId">accountId</a></code> | <code>number</code> | Account ID this KPI belongs to. Defaults to the flow's account_id. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.category">category</a></code> | <code>string</code> | Optional category to group KPIs. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.description">description</a></code> | <code>string</code> | Optional description. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Display name of the KPI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.query"></a>

```typescript
public readonly query: PathpointFlowKpisQuery;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#query PathpointFlow#query}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

Account ID this KPI belongs to. Defaults to the flow's account_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#account_id PathpointFlow#account_id}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Optional category to group KPIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#category PathpointFlow#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#description PathpointFlow#description}

---

### PathpointFlowKpisQuery <a name="PathpointFlowKpisQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

const pathpointFlowKpisQuery: pathpointFlow.PathpointFlowKpisQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.from">from</a></code> | <code>string</code> | Data source to query from (e.g., Transaction, Metric, Log). |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.select">select</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a></code> | select block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a></code> | time_window block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.where">where</a></code> | <code>string</code> | Optional WHERE clause to filter data. |

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Data source to query from (e.g., Transaction, Metric, Log).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#from PathpointFlow#from}

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.select"></a>

```typescript
public readonly select: PathpointFlowKpisQuerySelect;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#select PathpointFlow#select}

---

##### `timeWindow`<sup>Optional</sup> <a name="timeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.timeWindow"></a>

```typescript
public readonly timeWindow: PathpointFlowKpisQueryTimeWindow;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a>

time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#time_window PathpointFlow#time_window}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.where"></a>

```typescript
public readonly where: string;
```

- *Type:* string

Optional WHERE clause to filter data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#where PathpointFlow#where}

---

### PathpointFlowKpisQuerySelect <a name="PathpointFlowKpisQuerySelect" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

const pathpointFlowKpisQuerySelect: pathpointFlow.PathpointFlowKpisQuerySelect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.aggregationType">aggregationType</a></code> | <code>string</code> | Aggregation function: AVERAGE, COUNT, HISTOGRAM, MAX, MIN, PERCENTILE, SUM, UNIQUE_COUNT. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.alias">alias</a></code> | <code>string</code> | Optional alias for the aggregated value. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.attribute">attribute</a></code> | <code>string</code> | Attribute name to aggregate. Required for all functions except COUNT. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.threshold">threshold</a></code> | <code>number</code> | Threshold used in the selected function. |

---

##### `aggregationType`<sup>Required</sup> <a name="aggregationType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.aggregationType"></a>

```typescript
public readonly aggregationType: string;
```

- *Type:* string

Aggregation function: AVERAGE, COUNT, HISTOGRAM, MAX, MIN, PERCENTILE, SUM, UNIQUE_COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#aggregation_type PathpointFlow#aggregation_type}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Optional alias for the aggregated value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#alias PathpointFlow#alias}

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

Attribute name to aggregate. Required for all functions except COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#attribute PathpointFlow#attribute}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Threshold used in the selected function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#threshold PathpointFlow#threshold}

---

### PathpointFlowKpisQueryTimeWindow <a name="PathpointFlowKpisQueryTimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

const pathpointFlowKpisQueryTimeWindow: pathpointFlow.PathpointFlowKpisQueryTimeWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow.property.customRange">customRange</a></code> | <code>string</code> | Raw NRQL time fragment, e.g. 'SINCE 3 days ago COMPARE WITH 1 day ago'. Mutually exclusive with relative_range. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow.property.relativeRange">relativeRange</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a></code> | relative_range block. |

---

##### `customRange`<sup>Optional</sup> <a name="customRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow.property.customRange"></a>

```typescript
public readonly customRange: string;
```

- *Type:* string

Raw NRQL time fragment, e.g. 'SINCE 3 days ago COMPARE WITH 1 day ago'. Mutually exclusive with relative_range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#custom_range PathpointFlow#custom_range}

---

##### `relativeRange`<sup>Optional</sup> <a name="relativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow.property.relativeRange"></a>

```typescript
public readonly relativeRange: PathpointFlowKpisQueryTimeWindowRelativeRange;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a>

relative_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#relative_range PathpointFlow#relative_range}

---

### PathpointFlowKpisQueryTimeWindowRelativeRange <a name="PathpointFlowKpisQueryTimeWindowRelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

const pathpointFlowKpisQueryTimeWindowRelativeRange: pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange.property.since">since</a></code> | <code>string</code> | How far back the KPI is evaluated. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange.property.compareAgainst">compareAgainst</a></code> | <code>string</code> | The earlier window to compare against. |

---

##### `since`<sup>Required</sup> <a name="since" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange.property.since"></a>

```typescript
public readonly since: string;
```

- *Type:* string

How far back the KPI is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#since PathpointFlow#since}

---

##### `compareAgainst`<sup>Optional</sup> <a name="compareAgainst" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange.property.compareAgainst"></a>

```typescript
public readonly compareAgainst: string;
```

- *Type:* string

The earlier window to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#compare_against PathpointFlow#compare_against}

---

### PathpointFlowStages <a name="PathpointFlowStages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

const pathpointFlowStages: pathpointFlow.PathpointFlowStages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.name">name</a></code> | <code>string</code> | Display name of the stage. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.healthRollup">healthRollup</a></code> | <code>string</code> | Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.isExcluded">isExcluded</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, this stage is excluded from flow health calculation. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.levels">levels</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>[]</code> | levels block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.link">link</a></code> | <code>string</code> | Optional URL to an external resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.related">related</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a></code> | related block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.stageKpis">stageKpis</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>[]</code> | stage_kpis block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Display name of the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `healthRollup`<sup>Optional</sup> <a name="healthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.healthRollup"></a>

```typescript
public readonly healthRollup: string;
```

- *Type:* string

Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#health_rollup PathpointFlow#health_rollup}

---

##### `isExcluded`<sup>Optional</sup> <a name="isExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.isExcluded"></a>

```typescript
public readonly isExcluded: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, this stage is excluded from flow health calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#is_excluded PathpointFlow#is_excluded}

---

##### `levels`<sup>Optional</sup> <a name="levels" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.levels"></a>

```typescript
public readonly levels: IResolvable | PathpointFlowStagesLevels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>[]

levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#levels PathpointFlow#levels}

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

Optional URL to an external resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#link PathpointFlow#link}

---

##### `related`<sup>Optional</sup> <a name="related" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.related"></a>

```typescript
public readonly related: PathpointFlowStagesRelated;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a>

related block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#related PathpointFlow#related}

---

##### `stageKpis`<sup>Optional</sup> <a name="stageKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.stageKpis"></a>

```typescript
public readonly stageKpis: IResolvable | PathpointFlowStagesStageKpis[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>[]

stage_kpis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#stage_kpis PathpointFlow#stage_kpis}

---

### PathpointFlowStagesLevels <a name="PathpointFlowStagesLevels" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

const pathpointFlowStagesLevels: pathpointFlow.PathpointFlowStagesLevels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels.property.steps">steps</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>[]</code> | steps block. |

---

##### `steps`<sup>Optional</sup> <a name="steps" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels.property.steps"></a>

```typescript
public readonly steps: IResolvable | PathpointFlowStagesLevelsSteps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>[]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#steps PathpointFlow#steps}

---

### PathpointFlowStagesLevelsSteps <a name="PathpointFlowStagesLevelsSteps" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

const pathpointFlowStagesLevelsSteps: pathpointFlow.PathpointFlowStagesLevelsSteps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.name">name</a></code> | <code>string</code> | Display name of the step. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a></code> | config block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.entitySearchQuery">entitySearchQuery</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a></code> | entity_search_query block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.isExcluded">isExcluded</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, this step is excluded from level health calculation. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.link">link</a></code> | <code>string</code> | Optional URL to an external resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.scopedAccounts">scopedAccounts</a></code> | <code>number[]</code> | Account IDs whose data is scoped to this step. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.signals">signals</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>[]</code> | signals block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Display name of the step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.config"></a>

```typescript
public readonly config: PathpointFlowStagesLevelsStepsConfig;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#config PathpointFlow#config}

---

##### `entitySearchQuery`<sup>Optional</sup> <a name="entitySearchQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.entitySearchQuery"></a>

```typescript
public readonly entitySearchQuery: PathpointFlowStagesLevelsStepsEntitySearchQuery;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a>

entity_search_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#entity_search_query PathpointFlow#entity_search_query}

---

##### `isExcluded`<sup>Optional</sup> <a name="isExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.isExcluded"></a>

```typescript
public readonly isExcluded: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, this step is excluded from level health calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#is_excluded PathpointFlow#is_excluded}

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

Optional URL to an external resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#link PathpointFlow#link}

---

##### `scopedAccounts`<sup>Optional</sup> <a name="scopedAccounts" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.scopedAccounts"></a>

```typescript
public readonly scopedAccounts: number[];
```

- *Type:* number[]

Account IDs whose data is scoped to this step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#scoped_accounts PathpointFlow#scoped_accounts}

---

##### `signals`<sup>Optional</sup> <a name="signals" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.signals"></a>

```typescript
public readonly signals: IResolvable | PathpointFlowStagesLevelsStepsSignals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>[]

signals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#signals PathpointFlow#signals}

---

### PathpointFlowStagesLevelsStepsConfig <a name="PathpointFlowStagesLevelsStepsConfig" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

const pathpointFlowStagesLevelsStepsConfig: pathpointFlow.PathpointFlowStagesLevelsStepsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.healthRollup">healthRollup</a></code> | <code>string</code> | How step health is rolled up: BEST_STATUS_WINS or WORST_STATUS_WINS. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.thresholdType">thresholdType</a></code> | <code>string</code> | Whether threshold is FIXED or PERCENTAGE. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.thresholdValue">thresholdValue</a></code> | <code>number</code> | Numeric threshold value for step health evaluation. |

---

##### `healthRollup`<sup>Optional</sup> <a name="healthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.healthRollup"></a>

```typescript
public readonly healthRollup: string;
```

- *Type:* string

How step health is rolled up: BEST_STATUS_WINS or WORST_STATUS_WINS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#health_rollup PathpointFlow#health_rollup}

---

##### `thresholdType`<sup>Optional</sup> <a name="thresholdType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.thresholdType"></a>

```typescript
public readonly thresholdType: string;
```

- *Type:* string

Whether threshold is FIXED or PERCENTAGE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#threshold_type PathpointFlow#threshold_type}

---

##### `thresholdValue`<sup>Optional</sup> <a name="thresholdValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.thresholdValue"></a>

```typescript
public readonly thresholdValue: number;
```

- *Type:* number

Numeric threshold value for step health evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#threshold_value PathpointFlow#threshold_value}

---

### PathpointFlowStagesLevelsStepsEntitySearchQuery <a name="PathpointFlowStagesLevelsStepsEntitySearchQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

const pathpointFlowStagesLevelsStepsEntitySearchQuery: pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery.property.query">query</a></code> | <code>string</code> | Filter query for signals, e.g. domain='NR1' AND type='APPLICATION'. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery.property.isExcluded">isExcluded</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, this query is excluded from health calculation. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Filter query for signals, e.g. domain='NR1' AND type='APPLICATION'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#query PathpointFlow#query}

---

##### `isExcluded`<sup>Optional</sup> <a name="isExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery.property.isExcluded"></a>

```typescript
public readonly isExcluded: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, this query is excluded from health calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#is_excluded PathpointFlow#is_excluded}

---

### PathpointFlowStagesLevelsStepsSignals <a name="PathpointFlowStagesLevelsStepsSignals" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

const pathpointFlowStagesLevelsStepsSignals: pathpointFlow.PathpointFlowStagesLevelsStepsSignals = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.guid">guid</a></code> | <code>string</code> | Entity GUID of the signal. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.isExcluded">isExcluded</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, this signal is excluded from step health calculation. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.name">name</a></code> | <code>string</code> | Display name of the signal. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.type">type</a></code> | <code>string</code> | Whether this GUID belongs to an entity or an alert condition: ENTITY or ALERT. |

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

Entity GUID of the signal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#guid PathpointFlow#guid}

---

##### `isExcluded`<sup>Optional</sup> <a name="isExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.isExcluded"></a>

```typescript
public readonly isExcluded: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, this signal is excluded from step health calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#is_excluded PathpointFlow#is_excluded}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Display name of the signal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Whether this GUID belongs to an entity or an alert condition: ENTITY or ALERT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#type PathpointFlow#type}

---

### PathpointFlowStagesRelated <a name="PathpointFlowStagesRelated" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

const pathpointFlowStagesRelated: pathpointFlow.PathpointFlowStagesRelated = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated.property.source">source</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, this stage acts as a source to other stages. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated.property.target">target</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, this stage acts as a target to other stages. |

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated.property.source"></a>

```typescript
public readonly source: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, this stage acts as a source to other stages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#source PathpointFlow#source}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated.property.target"></a>

```typescript
public readonly target: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, this stage acts as a target to other stages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#target PathpointFlow#target}

---

### PathpointFlowStagesStageKpis <a name="PathpointFlowStagesStageKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

const pathpointFlowStagesStageKpis: pathpointFlow.PathpointFlowStagesStageKpis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.name">name</a></code> | <code>string</code> | Display name of the KPI. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.query">query</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a></code> | query block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.accountId">accountId</a></code> | <code>number</code> | Account ID this KPI belongs to. Defaults to the flow's account_id. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.category">category</a></code> | <code>string</code> | Optional category to group KPIs. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.description">description</a></code> | <code>string</code> | Optional description. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Display name of the KPI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.query"></a>

```typescript
public readonly query: PathpointFlowStagesStageKpisQuery;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#query PathpointFlow#query}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

Account ID this KPI belongs to. Defaults to the flow's account_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#account_id PathpointFlow#account_id}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Optional category to group KPIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#category PathpointFlow#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#description PathpointFlow#description}

---

### PathpointFlowStagesStageKpisQuery <a name="PathpointFlowStagesStageKpisQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

const pathpointFlowStagesStageKpisQuery: pathpointFlow.PathpointFlowStagesStageKpisQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.from">from</a></code> | <code>string</code> | Data source to query from (e.g., Transaction, Metric, Log). |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.select">select</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a></code> | select block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a></code> | time_window block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.where">where</a></code> | <code>string</code> | Optional WHERE clause to filter data. |

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Data source to query from (e.g., Transaction, Metric, Log).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#from PathpointFlow#from}

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.select"></a>

```typescript
public readonly select: PathpointFlowStagesStageKpisQuerySelect;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#select PathpointFlow#select}

---

##### `timeWindow`<sup>Optional</sup> <a name="timeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.timeWindow"></a>

```typescript
public readonly timeWindow: PathpointFlowStagesStageKpisQueryTimeWindow;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a>

time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#time_window PathpointFlow#time_window}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.where"></a>

```typescript
public readonly where: string;
```

- *Type:* string

Optional WHERE clause to filter data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#where PathpointFlow#where}

---

### PathpointFlowStagesStageKpisQuerySelect <a name="PathpointFlowStagesStageKpisQuerySelect" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

const pathpointFlowStagesStageKpisQuerySelect: pathpointFlow.PathpointFlowStagesStageKpisQuerySelect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.aggregationType">aggregationType</a></code> | <code>string</code> | Aggregation function: AVERAGE, COUNT, HISTOGRAM, MAX, MIN, PERCENTILE, SUM, UNIQUE_COUNT. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.alias">alias</a></code> | <code>string</code> | Optional alias for the aggregated value. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.attribute">attribute</a></code> | <code>string</code> | Attribute name to aggregate. Required for all functions except COUNT. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.threshold">threshold</a></code> | <code>number</code> | Threshold used in the selected function. |

---

##### `aggregationType`<sup>Required</sup> <a name="aggregationType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.aggregationType"></a>

```typescript
public readonly aggregationType: string;
```

- *Type:* string

Aggregation function: AVERAGE, COUNT, HISTOGRAM, MAX, MIN, PERCENTILE, SUM, UNIQUE_COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#aggregation_type PathpointFlow#aggregation_type}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Optional alias for the aggregated value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#alias PathpointFlow#alias}

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

Attribute name to aggregate. Required for all functions except COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#attribute PathpointFlow#attribute}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Threshold used in the selected function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#threshold PathpointFlow#threshold}

---

### PathpointFlowStagesStageKpisQueryTimeWindow <a name="PathpointFlowStagesStageKpisQueryTimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

const pathpointFlowStagesStageKpisQueryTimeWindow: pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow.property.customRange">customRange</a></code> | <code>string</code> | Raw NRQL time fragment, e.g. 'SINCE 3 days ago COMPARE WITH 1 day ago'. Mutually exclusive with relative_range. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow.property.relativeRange">relativeRange</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a></code> | relative_range block. |

---

##### `customRange`<sup>Optional</sup> <a name="customRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow.property.customRange"></a>

```typescript
public readonly customRange: string;
```

- *Type:* string

Raw NRQL time fragment, e.g. 'SINCE 3 days ago COMPARE WITH 1 day ago'. Mutually exclusive with relative_range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#custom_range PathpointFlow#custom_range}

---

##### `relativeRange`<sup>Optional</sup> <a name="relativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow.property.relativeRange"></a>

```typescript
public readonly relativeRange: PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a>

relative_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#relative_range PathpointFlow#relative_range}

---

### PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange <a name="PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

const pathpointFlowStagesStageKpisQueryTimeWindowRelativeRange: pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange.property.since">since</a></code> | <code>string</code> | How far back the KPI is evaluated. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange.property.compareAgainst">compareAgainst</a></code> | <code>string</code> | The earlier window to compare against. |

---

##### `since`<sup>Required</sup> <a name="since" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange.property.since"></a>

```typescript
public readonly since: string;
```

- *Type:* string

How far back the KPI is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#since PathpointFlow#since}

---

##### `compareAgainst`<sup>Optional</sup> <a name="compareAgainst" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange.property.compareAgainst"></a>

```typescript
public readonly compareAgainst: string;
```

- *Type:* string

The earlier window to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.3/docs/resources/pathpoint_flow#compare_against PathpointFlow#compare_against}

---

## Classes <a name="Classes" id="Classes"></a>

### PathpointFlowKpisList <a name="PathpointFlowKpisList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowKpisList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.get"></a>

```typescript
public get(index: number): PathpointFlowKpisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PathpointFlowKpis[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>[]

---


### PathpointFlowKpisOutputReference <a name="PathpointFlowKpisOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowKpisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQuery` <a name="putQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.putQuery"></a>

```typescript
public putQuery(value: PathpointFlowKpisQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetCategory` <a name="resetCategory" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetCategory"></a>

```typescript
public resetCategory(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.metricQuery">metricQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.query">query</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference">PathpointFlowKpisQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.queryInput">queryInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricQuery`<sup>Required</sup> <a name="metricQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.metricQuery"></a>

```typescript
public readonly metricQuery: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.query"></a>

```typescript
public readonly query: PathpointFlowKpisQueryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference">PathpointFlowKpisQueryOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: PathpointFlowKpisQuery;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PathpointFlowKpis;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis">PathpointFlowKpis</a>

---


### PathpointFlowKpisQueryOutputReference <a name="PathpointFlowKpisQueryOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowKpisQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putSelect">putSelect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putTimeWindow">putTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resetTimeWindow">resetTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resetWhere">resetWhere</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelect` <a name="putSelect" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putSelect"></a>

```typescript
public putSelect(value: PathpointFlowKpisQuerySelect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putSelect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a>

---

##### `putTimeWindow` <a name="putTimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putTimeWindow"></a>

```typescript
public putTimeWindow(value: PathpointFlowKpisQueryTimeWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a>

---

##### `resetTimeWindow` <a name="resetTimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resetTimeWindow"></a>

```typescript
public resetTimeWindow(): void
```

##### `resetWhere` <a name="resetWhere" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resetWhere"></a>

```typescript
public resetWhere(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.select">select</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference">PathpointFlowKpisQuerySelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference">PathpointFlowKpisQueryTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.selectInput">selectInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.timeWindowInput">timeWindowInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.whereInput">whereInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.where">where</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.select"></a>

```typescript
public readonly select: PathpointFlowKpisQuerySelectOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference">PathpointFlowKpisQuerySelectOutputReference</a>

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.timeWindow"></a>

```typescript
public readonly timeWindow: PathpointFlowKpisQueryTimeWindowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference">PathpointFlowKpisQueryTimeWindowOutputReference</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `selectInput`<sup>Optional</sup> <a name="selectInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.selectInput"></a>

```typescript
public readonly selectInput: PathpointFlowKpisQuerySelect;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a>

---

##### `timeWindowInput`<sup>Optional</sup> <a name="timeWindowInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.timeWindowInput"></a>

```typescript
public readonly timeWindowInput: PathpointFlowKpisQueryTimeWindow;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a>

---

##### `whereInput`<sup>Optional</sup> <a name="whereInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.whereInput"></a>

```typescript
public readonly whereInput: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.where"></a>

```typescript
public readonly where: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PathpointFlowKpisQuery;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a>

---


### PathpointFlowKpisQuerySelectOutputReference <a name="PathpointFlowKpisQuerySelectOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowKpisQuerySelectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetAttribute"></a>

```typescript
public resetAttribute(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetThreshold"></a>

```typescript
public resetThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aggregationTypeInput">aggregationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aggregationType">aggregationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationTypeInput`<sup>Optional</sup> <a name="aggregationTypeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aggregationTypeInput"></a>

```typescript
public readonly aggregationTypeInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `aggregationType`<sup>Required</sup> <a name="aggregationType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aggregationType"></a>

```typescript
public readonly aggregationType: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PathpointFlowKpisQuerySelect;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a>

---


### PathpointFlowKpisQueryTimeWindowOutputReference <a name="PathpointFlowKpisQueryTimeWindowOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.putRelativeRange">putRelativeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resetCustomRange">resetCustomRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resetRelativeRange">resetRelativeRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRelativeRange` <a name="putRelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.putRelativeRange"></a>

```typescript
public putRelativeRange(value: PathpointFlowKpisQueryTimeWindowRelativeRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.putRelativeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a>

---

##### `resetCustomRange` <a name="resetCustomRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resetCustomRange"></a>

```typescript
public resetCustomRange(): void
```

##### `resetRelativeRange` <a name="resetRelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resetRelativeRange"></a>

```typescript
public resetRelativeRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.relativeRange">relativeRange</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference">PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.customRangeInput">customRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.relativeRangeInput">relativeRangeInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.customRange">customRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `relativeRange`<sup>Required</sup> <a name="relativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.relativeRange"></a>

```typescript
public readonly relativeRange: PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference">PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference</a>

---

##### `customRangeInput`<sup>Optional</sup> <a name="customRangeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.customRangeInput"></a>

```typescript
public readonly customRangeInput: string;
```

- *Type:* string

---

##### `relativeRangeInput`<sup>Optional</sup> <a name="relativeRangeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.relativeRangeInput"></a>

```typescript
public readonly relativeRangeInput: PathpointFlowKpisQueryTimeWindowRelativeRange;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a>

---

##### `customRange`<sup>Required</sup> <a name="customRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.customRange"></a>

```typescript
public readonly customRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PathpointFlowKpisQueryTimeWindow;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a>

---


### PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference <a name="PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.resetCompareAgainst">resetCompareAgainst</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompareAgainst` <a name="resetCompareAgainst" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.resetCompareAgainst"></a>

```typescript
public resetCompareAgainst(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainstInput">compareAgainstInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.sinceInput">sinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainst">compareAgainst</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.since">since</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compareAgainstInput`<sup>Optional</sup> <a name="compareAgainstInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainstInput"></a>

```typescript
public readonly compareAgainstInput: string;
```

- *Type:* string

---

##### `sinceInput`<sup>Optional</sup> <a name="sinceInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.sinceInput"></a>

```typescript
public readonly sinceInput: string;
```

- *Type:* string

---

##### `compareAgainst`<sup>Required</sup> <a name="compareAgainst" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainst"></a>

```typescript
public readonly compareAgainst: string;
```

- *Type:* string

---

##### `since`<sup>Required</sup> <a name="since" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.since"></a>

```typescript
public readonly since: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PathpointFlowKpisQueryTimeWindowRelativeRange;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a>

---


### PathpointFlowStagesLevelsList <a name="PathpointFlowStagesLevelsList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowStagesLevelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.get"></a>

```typescript
public get(index: number): PathpointFlowStagesLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PathpointFlowStagesLevels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>[]

---


### PathpointFlowStagesLevelsOutputReference <a name="PathpointFlowStagesLevelsOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowStagesLevelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.putSteps">putSteps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.resetSteps">resetSteps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSteps` <a name="putSteps" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.putSteps"></a>

```typescript
public putSteps(value: IResolvable | PathpointFlowStagesLevelsSteps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.putSteps.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>[]

---

##### `resetSteps` <a name="resetSteps" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.resetSteps"></a>

```typescript
public resetSteps(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList">PathpointFlowStagesLevelsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.stepsInput">stepsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.steps"></a>

```typescript
public readonly steps: PathpointFlowStagesLevelsStepsList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList">PathpointFlowStagesLevelsStepsList</a>

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.stepsInput"></a>

```typescript
public readonly stepsInput: IResolvable | PathpointFlowStagesLevelsSteps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PathpointFlowStagesLevels;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>

---


### PathpointFlowStagesLevelsStepsConfigOutputReference <a name="PathpointFlowStagesLevelsStepsConfigOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetHealthRollup">resetHealthRollup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetThresholdType">resetThresholdType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetThresholdValue">resetThresholdValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHealthRollup` <a name="resetHealthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetHealthRollup"></a>

```typescript
public resetHealthRollup(): void
```

##### `resetThresholdType` <a name="resetThresholdType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetThresholdType"></a>

```typescript
public resetThresholdType(): void
```

##### `resetThresholdValue` <a name="resetThresholdValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetThresholdValue"></a>

```typescript
public resetThresholdValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.healthRollupInput">healthRollupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdTypeInput">thresholdTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdValueInput">thresholdValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.healthRollup">healthRollup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdType">thresholdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdValue">thresholdValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `healthRollupInput`<sup>Optional</sup> <a name="healthRollupInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.healthRollupInput"></a>

```typescript
public readonly healthRollupInput: string;
```

- *Type:* string

---

##### `thresholdTypeInput`<sup>Optional</sup> <a name="thresholdTypeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdTypeInput"></a>

```typescript
public readonly thresholdTypeInput: string;
```

- *Type:* string

---

##### `thresholdValueInput`<sup>Optional</sup> <a name="thresholdValueInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdValueInput"></a>

```typescript
public readonly thresholdValueInput: number;
```

- *Type:* number

---

##### `healthRollup`<sup>Required</sup> <a name="healthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.healthRollup"></a>

```typescript
public readonly healthRollup: string;
```

- *Type:* string

---

##### `thresholdType`<sup>Required</sup> <a name="thresholdType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdType"></a>

```typescript
public readonly thresholdType: string;
```

- *Type:* string

---

##### `thresholdValue`<sup>Required</sup> <a name="thresholdValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdValue"></a>

```typescript
public readonly thresholdValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PathpointFlowStagesLevelsStepsConfig;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a>

---


### PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference <a name="PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.resetIsExcluded">resetIsExcluded</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsExcluded` <a name="resetIsExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.resetIsExcluded"></a>

```typescript
public resetIsExcluded(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.isExcludedInput">isExcludedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.isExcluded">isExcluded</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isExcludedInput`<sup>Optional</sup> <a name="isExcludedInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.isExcludedInput"></a>

```typescript
public readonly isExcludedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `isExcluded`<sup>Required</sup> <a name="isExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.isExcluded"></a>

```typescript
public readonly isExcluded: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PathpointFlowStagesLevelsStepsEntitySearchQuery;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a>

---


### PathpointFlowStagesLevelsStepsList <a name="PathpointFlowStagesLevelsStepsList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowStagesLevelsStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.get"></a>

```typescript
public get(index: number): PathpointFlowStagesLevelsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PathpointFlowStagesLevelsSteps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>[]

---


### PathpointFlowStagesLevelsStepsOutputReference <a name="PathpointFlowStagesLevelsStepsOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putEntitySearchQuery">putEntitySearchQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putSignals">putSignals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetEntitySearchQuery">resetEntitySearchQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetIsExcluded">resetIsExcluded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetLink">resetLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetScopedAccounts">resetScopedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetSignals">resetSignals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putConfig"></a>

```typescript
public putConfig(value: PathpointFlowStagesLevelsStepsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a>

---

##### `putEntitySearchQuery` <a name="putEntitySearchQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putEntitySearchQuery"></a>

```typescript
public putEntitySearchQuery(value: PathpointFlowStagesLevelsStepsEntitySearchQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putEntitySearchQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a>

---

##### `putSignals` <a name="putSignals" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putSignals"></a>

```typescript
public putSignals(value: IResolvable | PathpointFlowStagesLevelsStepsSignals[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putSignals.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>[]

---

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetEntitySearchQuery` <a name="resetEntitySearchQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetEntitySearchQuery"></a>

```typescript
public resetEntitySearchQuery(): void
```

##### `resetIsExcluded` <a name="resetIsExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetIsExcluded"></a>

```typescript
public resetIsExcluded(): void
```

##### `resetLink` <a name="resetLink" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetLink"></a>

```typescript
public resetLink(): void
```

##### `resetScopedAccounts` <a name="resetScopedAccounts" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetScopedAccounts"></a>

```typescript
public resetScopedAccounts(): void
```

##### `resetSignals` <a name="resetSignals" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetSignals"></a>

```typescript
public resetSignals(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference">PathpointFlowStagesLevelsStepsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.entitySearchQuery">entitySearchQuery</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference">PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.signals">signals</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList">PathpointFlowStagesLevelsStepsSignalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.entitySearchQueryInput">entitySearchQueryInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.isExcludedInput">isExcludedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.linkInput">linkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.scopedAccountsInput">scopedAccountsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.signalsInput">signalsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.isExcluded">isExcluded</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.scopedAccounts">scopedAccounts</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.config"></a>

```typescript
public readonly config: PathpointFlowStagesLevelsStepsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference">PathpointFlowStagesLevelsStepsConfigOutputReference</a>

---

##### `entitySearchQuery`<sup>Required</sup> <a name="entitySearchQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.entitySearchQuery"></a>

```typescript
public readonly entitySearchQuery: PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference">PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `signals`<sup>Required</sup> <a name="signals" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.signals"></a>

```typescript
public readonly signals: PathpointFlowStagesLevelsStepsSignalsList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList">PathpointFlowStagesLevelsStepsSignalsList</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.configInput"></a>

```typescript
public readonly configInput: PathpointFlowStagesLevelsStepsConfig;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a>

---

##### `entitySearchQueryInput`<sup>Optional</sup> <a name="entitySearchQueryInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.entitySearchQueryInput"></a>

```typescript
public readonly entitySearchQueryInput: PathpointFlowStagesLevelsStepsEntitySearchQuery;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a>

---

##### `isExcludedInput`<sup>Optional</sup> <a name="isExcludedInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.isExcludedInput"></a>

```typescript
public readonly isExcludedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.linkInput"></a>

```typescript
public readonly linkInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopedAccountsInput`<sup>Optional</sup> <a name="scopedAccountsInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.scopedAccountsInput"></a>

```typescript
public readonly scopedAccountsInput: number[];
```

- *Type:* number[]

---

##### `signalsInput`<sup>Optional</sup> <a name="signalsInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.signalsInput"></a>

```typescript
public readonly signalsInput: IResolvable | PathpointFlowStagesLevelsStepsSignals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>[]

---

##### `isExcluded`<sup>Required</sup> <a name="isExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.isExcluded"></a>

```typescript
public readonly isExcluded: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scopedAccounts`<sup>Required</sup> <a name="scopedAccounts" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.scopedAccounts"></a>

```typescript
public readonly scopedAccounts: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PathpointFlowStagesLevelsSteps;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps">PathpointFlowStagesLevelsSteps</a>

---


### PathpointFlowStagesLevelsStepsSignalsList <a name="PathpointFlowStagesLevelsStepsSignalsList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.get"></a>

```typescript
public get(index: number): PathpointFlowStagesLevelsStepsSignalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PathpointFlowStagesLevelsStepsSignals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>[]

---


### PathpointFlowStagesLevelsStepsSignalsOutputReference <a name="PathpointFlowStagesLevelsStepsSignalsOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetIsExcluded">resetIsExcluded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsExcluded` <a name="resetIsExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetIsExcluded"></a>

```typescript
public resetIsExcluded(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.guidInput">guidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.isExcludedInput">isExcludedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.isExcluded">isExcluded</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `guidInput`<sup>Optional</sup> <a name="guidInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.guidInput"></a>

```typescript
public readonly guidInput: string;
```

- *Type:* string

---

##### `isExcludedInput`<sup>Optional</sup> <a name="isExcludedInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.isExcludedInput"></a>

```typescript
public readonly isExcludedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `isExcluded`<sup>Required</sup> <a name="isExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.isExcluded"></a>

```typescript
public readonly isExcluded: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PathpointFlowStagesLevelsStepsSignals;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals">PathpointFlowStagesLevelsStepsSignals</a>

---


### PathpointFlowStagesList <a name="PathpointFlowStagesList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowStagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.get"></a>

```typescript
public get(index: number): PathpointFlowStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PathpointFlowStages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>[]

---


### PathpointFlowStagesOutputReference <a name="PathpointFlowStagesOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowStagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putLevels">putLevels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putRelated">putRelated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putStageKpis">putStageKpis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetHealthRollup">resetHealthRollup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetIsExcluded">resetIsExcluded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetLevels">resetLevels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetLink">resetLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetRelated">resetRelated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetStageKpis">resetStageKpis</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLevels` <a name="putLevels" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putLevels"></a>

```typescript
public putLevels(value: IResolvable | PathpointFlowStagesLevels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putLevels.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>[]

---

##### `putRelated` <a name="putRelated" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putRelated"></a>

```typescript
public putRelated(value: PathpointFlowStagesRelated): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putRelated.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a>

---

##### `putStageKpis` <a name="putStageKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putStageKpis"></a>

```typescript
public putStageKpis(value: IResolvable | PathpointFlowStagesStageKpis[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putStageKpis.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>[]

---

##### `resetHealthRollup` <a name="resetHealthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetHealthRollup"></a>

```typescript
public resetHealthRollup(): void
```

##### `resetIsExcluded` <a name="resetIsExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetIsExcluded"></a>

```typescript
public resetIsExcluded(): void
```

##### `resetLevels` <a name="resetLevels" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetLevels"></a>

```typescript
public resetLevels(): void
```

##### `resetLink` <a name="resetLink" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetLink"></a>

```typescript
public resetLink(): void
```

##### `resetRelated` <a name="resetRelated" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetRelated"></a>

```typescript
public resetRelated(): void
```

##### `resetStageKpis` <a name="resetStageKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetStageKpis"></a>

```typescript
public resetStageKpis(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.levels">levels</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList">PathpointFlowStagesLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.related">related</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference">PathpointFlowStagesRelatedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.stageKpis">stageKpis</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList">PathpointFlowStagesStageKpisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.healthRollupInput">healthRollupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.isExcludedInput">isExcludedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.levelsInput">levelsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.linkInput">linkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.relatedInput">relatedInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.stageKpisInput">stageKpisInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.healthRollup">healthRollup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.isExcluded">isExcluded</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `levels`<sup>Required</sup> <a name="levels" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.levels"></a>

```typescript
public readonly levels: PathpointFlowStagesLevelsList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList">PathpointFlowStagesLevelsList</a>

---

##### `related`<sup>Required</sup> <a name="related" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.related"></a>

```typescript
public readonly related: PathpointFlowStagesRelatedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference">PathpointFlowStagesRelatedOutputReference</a>

---

##### `stageKpis`<sup>Required</sup> <a name="stageKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.stageKpis"></a>

```typescript
public readonly stageKpis: PathpointFlowStagesStageKpisList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList">PathpointFlowStagesStageKpisList</a>

---

##### `healthRollupInput`<sup>Optional</sup> <a name="healthRollupInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.healthRollupInput"></a>

```typescript
public readonly healthRollupInput: string;
```

- *Type:* string

---

##### `isExcludedInput`<sup>Optional</sup> <a name="isExcludedInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.isExcludedInput"></a>

```typescript
public readonly isExcludedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `levelsInput`<sup>Optional</sup> <a name="levelsInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.levelsInput"></a>

```typescript
public readonly levelsInput: IResolvable | PathpointFlowStagesLevels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels">PathpointFlowStagesLevels</a>[]

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.linkInput"></a>

```typescript
public readonly linkInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `relatedInput`<sup>Optional</sup> <a name="relatedInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.relatedInput"></a>

```typescript
public readonly relatedInput: PathpointFlowStagesRelated;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a>

---

##### `stageKpisInput`<sup>Optional</sup> <a name="stageKpisInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.stageKpisInput"></a>

```typescript
public readonly stageKpisInput: IResolvable | PathpointFlowStagesStageKpis[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>[]

---

##### `healthRollup`<sup>Required</sup> <a name="healthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.healthRollup"></a>

```typescript
public readonly healthRollup: string;
```

- *Type:* string

---

##### `isExcluded`<sup>Required</sup> <a name="isExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.isExcluded"></a>

```typescript
public readonly isExcluded: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PathpointFlowStages;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages">PathpointFlowStages</a>

---


### PathpointFlowStagesRelatedOutputReference <a name="PathpointFlowStagesRelatedOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowStagesRelatedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSource` <a name="resetSource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.sourceInput">sourceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.targetInput">targetInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.source">source</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.target">target</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.source"></a>

```typescript
public readonly source: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.target"></a>

```typescript
public readonly target: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PathpointFlowStagesRelated;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a>

---


### PathpointFlowStagesStageKpisList <a name="PathpointFlowStagesStageKpisList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowStagesStageKpisList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.get"></a>

```typescript
public get(index: number): PathpointFlowStagesStageKpisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PathpointFlowStagesStageKpis[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>[]

---


### PathpointFlowStagesStageKpisOutputReference <a name="PathpointFlowStagesStageKpisOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowStagesStageKpisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQuery` <a name="putQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.putQuery"></a>

```typescript
public putQuery(value: PathpointFlowStagesStageKpisQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetCategory` <a name="resetCategory" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetCategory"></a>

```typescript
public resetCategory(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.metricQuery">metricQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.query">query</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference">PathpointFlowStagesStageKpisQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.queryInput">queryInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricQuery`<sup>Required</sup> <a name="metricQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.metricQuery"></a>

```typescript
public readonly metricQuery: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.query"></a>

```typescript
public readonly query: PathpointFlowStagesStageKpisQueryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference">PathpointFlowStagesStageKpisQueryOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: PathpointFlowStagesStageKpisQuery;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PathpointFlowStagesStageKpis;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis">PathpointFlowStagesStageKpis</a>

---


### PathpointFlowStagesStageKpisQueryOutputReference <a name="PathpointFlowStagesStageKpisQueryOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putSelect">putSelect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putTimeWindow">putTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resetTimeWindow">resetTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resetWhere">resetWhere</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelect` <a name="putSelect" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putSelect"></a>

```typescript
public putSelect(value: PathpointFlowStagesStageKpisQuerySelect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putSelect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a>

---

##### `putTimeWindow` <a name="putTimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putTimeWindow"></a>

```typescript
public putTimeWindow(value: PathpointFlowStagesStageKpisQueryTimeWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a>

---

##### `resetTimeWindow` <a name="resetTimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resetTimeWindow"></a>

```typescript
public resetTimeWindow(): void
```

##### `resetWhere` <a name="resetWhere" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resetWhere"></a>

```typescript
public resetWhere(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.select">select</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference">PathpointFlowStagesStageKpisQuerySelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference">PathpointFlowStagesStageKpisQueryTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.selectInput">selectInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.timeWindowInput">timeWindowInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.whereInput">whereInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.where">where</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.select"></a>

```typescript
public readonly select: PathpointFlowStagesStageKpisQuerySelectOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference">PathpointFlowStagesStageKpisQuerySelectOutputReference</a>

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.timeWindow"></a>

```typescript
public readonly timeWindow: PathpointFlowStagesStageKpisQueryTimeWindowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference">PathpointFlowStagesStageKpisQueryTimeWindowOutputReference</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `selectInput`<sup>Optional</sup> <a name="selectInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.selectInput"></a>

```typescript
public readonly selectInput: PathpointFlowStagesStageKpisQuerySelect;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a>

---

##### `timeWindowInput`<sup>Optional</sup> <a name="timeWindowInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.timeWindowInput"></a>

```typescript
public readonly timeWindowInput: PathpointFlowStagesStageKpisQueryTimeWindow;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a>

---

##### `whereInput`<sup>Optional</sup> <a name="whereInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.whereInput"></a>

```typescript
public readonly whereInput: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.where"></a>

```typescript
public readonly where: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PathpointFlowStagesStageKpisQuery;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a>

---


### PathpointFlowStagesStageKpisQuerySelectOutputReference <a name="PathpointFlowStagesStageKpisQuerySelectOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetAttribute"></a>

```typescript
public resetAttribute(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetThreshold"></a>

```typescript
public resetThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aggregationTypeInput">aggregationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aggregationType">aggregationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationTypeInput`<sup>Optional</sup> <a name="aggregationTypeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aggregationTypeInput"></a>

```typescript
public readonly aggregationTypeInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `aggregationType`<sup>Required</sup> <a name="aggregationType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aggregationType"></a>

```typescript
public readonly aggregationType: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PathpointFlowStagesStageKpisQuerySelect;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a>

---


### PathpointFlowStagesStageKpisQueryTimeWindowOutputReference <a name="PathpointFlowStagesStageKpisQueryTimeWindowOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.putRelativeRange">putRelativeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resetCustomRange">resetCustomRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resetRelativeRange">resetRelativeRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRelativeRange` <a name="putRelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.putRelativeRange"></a>

```typescript
public putRelativeRange(value: PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.putRelativeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a>

---

##### `resetCustomRange` <a name="resetCustomRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resetCustomRange"></a>

```typescript
public resetCustomRange(): void
```

##### `resetRelativeRange` <a name="resetRelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resetRelativeRange"></a>

```typescript
public resetRelativeRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.relativeRange">relativeRange</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.customRangeInput">customRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.relativeRangeInput">relativeRangeInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.customRange">customRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `relativeRange`<sup>Required</sup> <a name="relativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.relativeRange"></a>

```typescript
public readonly relativeRange: PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference</a>

---

##### `customRangeInput`<sup>Optional</sup> <a name="customRangeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.customRangeInput"></a>

```typescript
public readonly customRangeInput: string;
```

- *Type:* string

---

##### `relativeRangeInput`<sup>Optional</sup> <a name="relativeRangeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.relativeRangeInput"></a>

```typescript
public readonly relativeRangeInput: PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a>

---

##### `customRange`<sup>Required</sup> <a name="customRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.customRange"></a>

```typescript
public readonly customRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PathpointFlowStagesStageKpisQueryTimeWindow;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a>

---


### PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference <a name="PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.Initializer"></a>

```typescript
import { pathpointFlow } from '@cdktn/provider-newrelic'

new pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.resetCompareAgainst">resetCompareAgainst</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompareAgainst` <a name="resetCompareAgainst" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.resetCompareAgainst"></a>

```typescript
public resetCompareAgainst(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainstInput">compareAgainstInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.sinceInput">sinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainst">compareAgainst</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.since">since</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compareAgainstInput`<sup>Optional</sup> <a name="compareAgainstInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainstInput"></a>

```typescript
public readonly compareAgainstInput: string;
```

- *Type:* string

---

##### `sinceInput`<sup>Optional</sup> <a name="sinceInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.sinceInput"></a>

```typescript
public readonly sinceInput: string;
```

- *Type:* string

---

##### `compareAgainst`<sup>Required</sup> <a name="compareAgainst" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainst"></a>

```typescript
public readonly compareAgainst: string;
```

- *Type:* string

---

##### `since`<sup>Required</sup> <a name="since" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.since"></a>

```typescript
public readonly since: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange;
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a>

---



