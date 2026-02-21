# `alertCompoundCondition` Submodule <a name="`alertCompoundCondition` Submodule" id="@cdktn/provider-newrelic.alertCompoundCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertCompoundCondition <a name="AlertCompoundCondition" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/alert_compound_condition newrelic_alert_compound_condition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer"></a>

```typescript
import { alertCompoundCondition } from '@cdktn/provider-newrelic'

new alertCompoundCondition.AlertCompoundCondition(scope: Construct, id: string, config: AlertCompoundConditionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig">AlertCompoundConditionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig">AlertCompoundConditionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putComponentConditions">putComponentConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetFacetMatchingBehavior">resetFacetMatchingBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetRunbookUrl">resetRunbookUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetThresholdDuration">resetThresholdDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComponentConditions` <a name="putComponentConditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putComponentConditions"></a>

```typescript
public putComponentConditions(value: IResolvable | AlertCompoundConditionComponentConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putComponentConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putTimeouts"></a>

```typescript
public putTimeouts(value: AlertCompoundConditionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetFacetMatchingBehavior` <a name="resetFacetMatchingBehavior" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetFacetMatchingBehavior"></a>

```typescript
public resetFacetMatchingBehavior(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRunbookUrl` <a name="resetRunbookUrl" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetRunbookUrl"></a>

```typescript
public resetRunbookUrl(): void
```

##### `resetThresholdDuration` <a name="resetThresholdDuration" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetThresholdDuration"></a>

```typescript
public resetThresholdDuration(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AlertCompoundCondition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isConstruct"></a>

```typescript
import { alertCompoundCondition } from '@cdktn/provider-newrelic'

alertCompoundCondition.AlertCompoundCondition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformElement"></a>

```typescript
import { alertCompoundCondition } from '@cdktn/provider-newrelic'

alertCompoundCondition.AlertCompoundCondition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformResource"></a>

```typescript
import { alertCompoundCondition } from '@cdktn/provider-newrelic'

alertCompoundCondition.AlertCompoundCondition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport"></a>

```typescript
import { alertCompoundCondition } from '@cdktn/provider-newrelic'

alertCompoundCondition.AlertCompoundCondition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AlertCompoundCondition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AlertCompoundCondition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AlertCompoundCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/alert_compound_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AlertCompoundCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.componentConditions">componentConditions</a></code> | <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList">AlertCompoundConditionComponentConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference">AlertCompoundConditionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.componentConditionsInput">componentConditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.facetMatchingBehaviorInput">facetMatchingBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.policyIdInput">policyIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.runbookUrlInput">runbookUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.thresholdDurationInput">thresholdDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.triggerExpressionInput">triggerExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.facetMatchingBehavior">facetMatchingBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.policyId">policyId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.runbookUrl">runbookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.thresholdDuration">thresholdDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.triggerExpression">triggerExpression</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `componentConditions`<sup>Required</sup> <a name="componentConditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.componentConditions"></a>

```typescript
public readonly componentConditions: AlertCompoundConditionComponentConditionsList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList">AlertCompoundConditionComponentConditionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.timeouts"></a>

```typescript
public readonly timeouts: AlertCompoundConditionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference">AlertCompoundConditionTimeoutsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `componentConditionsInput`<sup>Optional</sup> <a name="componentConditionsInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.componentConditionsInput"></a>

```typescript
public readonly componentConditionsInput: IResolvable | AlertCompoundConditionComponentConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `facetMatchingBehaviorInput`<sup>Optional</sup> <a name="facetMatchingBehaviorInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.facetMatchingBehaviorInput"></a>

```typescript
public readonly facetMatchingBehaviorInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: number;
```

- *Type:* number

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="runbookUrlInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.runbookUrlInput"></a>

```typescript
public readonly runbookUrlInput: string;
```

- *Type:* string

---

##### `thresholdDurationInput`<sup>Optional</sup> <a name="thresholdDurationInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.thresholdDurationInput"></a>

```typescript
public readonly thresholdDurationInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AlertCompoundConditionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a>

---

##### `triggerExpressionInput`<sup>Optional</sup> <a name="triggerExpressionInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.triggerExpressionInput"></a>

```typescript
public readonly triggerExpressionInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `facetMatchingBehavior`<sup>Required</sup> <a name="facetMatchingBehavior" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.facetMatchingBehavior"></a>

```typescript
public readonly facetMatchingBehavior: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* number

---

##### `runbookUrl`<sup>Required</sup> <a name="runbookUrl" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.runbookUrl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* string

---

##### `thresholdDuration`<sup>Required</sup> <a name="thresholdDuration" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.thresholdDuration"></a>

```typescript
public readonly thresholdDuration: number;
```

- *Type:* number

---

##### `triggerExpression`<sup>Required</sup> <a name="triggerExpression" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.triggerExpression"></a>

```typescript
public readonly triggerExpression: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertCompoundConditionComponentConditions <a name="AlertCompoundConditionComponentConditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.Initializer"></a>

```typescript
import { alertCompoundCondition } from '@cdktn/provider-newrelic'

const alertCompoundConditionComponentConditions: alertCompoundCondition.AlertCompoundConditionComponentConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.property.alias">alias</a></code> | <code>string</code> | The identifier that will be used in the compound alert condition's trigger_expression (e.g., 'A', 'B', 'C'). |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.property.id">id</a></code> | <code>string</code> | The ID of the existing alert condition to use as a component. |

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

The identifier that will be used in the compound alert condition's trigger_expression (e.g., 'A', 'B', 'C').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/alert_compound_condition#alias AlertCompoundCondition#alias}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the existing alert condition to use as a component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/alert_compound_condition#id AlertCompoundCondition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AlertCompoundConditionConfig <a name="AlertCompoundConditionConfig" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.Initializer"></a>

```typescript
import { alertCompoundCondition } from '@cdktn/provider-newrelic'

const alertCompoundConditionConfig: alertCompoundCondition.AlertCompoundConditionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.componentConditions">componentConditions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>[]</code> | component_conditions block. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether or not to enable the alert condition. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.name">name</a></code> | <code>string</code> | The title of the compound alert condition. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.policyId">policyId</a></code> | <code>number</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.triggerExpression">triggerExpression</a></code> | <code>string</code> | Expression that defines how component condition evaluations are combined. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.accountId">accountId</a></code> | <code>number</code> | The New Relic account ID for managing your compound alert conditions. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.facetMatchingBehavior">facetMatchingBehavior</a></code> | <code>string</code> | How the compound condition will take into account the component conditions' facets during evaluation. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/alert_compound_condition#id AlertCompoundCondition#id}. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.runbookUrl">runbookUrl</a></code> | <code>string</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.thresholdDuration">thresholdDuration</a></code> | <code>number</code> | The duration, in seconds, that the trigger expression must be true before the compound alert condition will activate. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `componentConditions`<sup>Required</sup> <a name="componentConditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.componentConditions"></a>

```typescript
public readonly componentConditions: IResolvable | AlertCompoundConditionComponentConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>[]

component_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/alert_compound_condition#component_conditions AlertCompoundCondition#component_conditions}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether or not to enable the alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/alert_compound_condition#enabled AlertCompoundCondition#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The title of the compound alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/alert_compound_condition#name AlertCompoundCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.policyId"></a>

```typescript
public readonly policyId: number;
```

- *Type:* number

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/alert_compound_condition#policy_id AlertCompoundCondition#policy_id}

---

##### `triggerExpression`<sup>Required</sup> <a name="triggerExpression" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.triggerExpression"></a>

```typescript
public readonly triggerExpression: string;
```

- *Type:* string

Expression that defines how component condition evaluations are combined.

Valid operators are 'AND', 'OR', 'NOT'. For more complex expressions, use parentheses. Simple example: 'A AND B'. Complex example: 'A AND (B OR C) AND NOT D'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/alert_compound_condition#trigger_expression AlertCompoundCondition#trigger_expression}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The New Relic account ID for managing your compound alert conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/alert_compound_condition#account_id AlertCompoundCondition#account_id}

---

##### `facetMatchingBehavior`<sup>Optional</sup> <a name="facetMatchingBehavior" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.facetMatchingBehavior"></a>

```typescript
public readonly facetMatchingBehavior: string;
```

- *Type:* string

How the compound condition will take into account the component conditions' facets during evaluation.

Valid values: 'FACETS_IGNORED' (default) - facets are not taken into consideration when determining when the compound alert condition activates; 'FACETS_MATCH' - the compound alert condition will activate only when shared facets have matching values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/alert_compound_condition#facet_matching_behavior AlertCompoundCondition#facet_matching_behavior}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/alert_compound_condition#id AlertCompoundCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runbookUrl`<sup>Optional</sup> <a name="runbookUrl" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.runbookUrl"></a>

```typescript
public readonly runbookUrl: string;
```

- *Type:* string

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/alert_compound_condition#runbook_url AlertCompoundCondition#runbook_url}

---

##### `thresholdDuration`<sup>Optional</sup> <a name="thresholdDuration" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.thresholdDuration"></a>

```typescript
public readonly thresholdDuration: number;
```

- *Type:* number

The duration, in seconds, that the trigger expression must be true before the compound alert condition will activate.

Between 30-86400 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/alert_compound_condition#threshold_duration AlertCompoundCondition#threshold_duration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AlertCompoundConditionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/alert_compound_condition#timeouts AlertCompoundCondition#timeouts}

---

### AlertCompoundConditionTimeouts <a name="AlertCompoundConditionTimeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts.Initializer"></a>

```typescript
import { alertCompoundCondition } from '@cdktn/provider-newrelic'

const alertCompoundConditionTimeouts: alertCompoundCondition.AlertCompoundConditionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/alert_compound_condition#create AlertCompoundCondition#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/resources/alert_compound_condition#create AlertCompoundCondition#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlertCompoundConditionComponentConditionsList <a name="AlertCompoundConditionComponentConditionsList" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer"></a>

```typescript
import { alertCompoundCondition } from '@cdktn/provider-newrelic'

new alertCompoundCondition.AlertCompoundConditionComponentConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.get"></a>

```typescript
public get(index: number): AlertCompoundConditionComponentConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlertCompoundConditionComponentConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>[]

---


### AlertCompoundConditionComponentConditionsOutputReference <a name="AlertCompoundConditionComponentConditionsOutputReference" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer"></a>

```typescript
import { alertCompoundCondition } from '@cdktn/provider-newrelic'

new alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlertCompoundConditionComponentConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions">AlertCompoundConditionComponentConditions</a>

---


### AlertCompoundConditionTimeoutsOutputReference <a name="AlertCompoundConditionTimeoutsOutputReference" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer"></a>

```typescript
import { alertCompoundCondition } from '@cdktn/provider-newrelic'

new alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlertCompoundConditionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a>

---



