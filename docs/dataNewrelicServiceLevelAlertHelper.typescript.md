# `dataNewrelicServiceLevelAlertHelper` Submodule <a name="`dataNewrelicServiceLevelAlertHelper` Submodule" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicServiceLevelAlertHelper <a name="DataNewrelicServiceLevelAlertHelper" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/service_level_alert_helper newrelic_service_level_alert_helper}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer"></a>

```typescript
import { dataNewrelicServiceLevelAlertHelper } from '@cdktn/provider-newrelic'

new dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper(scope: Construct, id: string, config: DataNewrelicServiceLevelAlertHelperConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig">DataNewrelicServiceLevelAlertHelperConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig">DataNewrelicServiceLevelAlertHelperConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetCustomEvaluationPeriod">resetCustomEvaluationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetCustomToleratedBudgetConsumption">resetCustomToleratedBudgetConsumption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetIsBadEvents">resetIsBadEvents</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCustomEvaluationPeriod` <a name="resetCustomEvaluationPeriod" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetCustomEvaluationPeriod"></a>

```typescript
public resetCustomEvaluationPeriod(): void
```

##### `resetCustomToleratedBudgetConsumption` <a name="resetCustomToleratedBudgetConsumption" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetCustomToleratedBudgetConsumption"></a>

```typescript
public resetCustomToleratedBudgetConsumption(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsBadEvents` <a name="resetIsBadEvents" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetIsBadEvents"></a>

```typescript
public resetIsBadEvents(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataNewrelicServiceLevelAlertHelper resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isConstruct"></a>

```typescript
import { dataNewrelicServiceLevelAlertHelper } from '@cdktn/provider-newrelic'

dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isTerraformElement"></a>

```typescript
import { dataNewrelicServiceLevelAlertHelper } from '@cdktn/provider-newrelic'

dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isTerraformDataSource"></a>

```typescript
import { dataNewrelicServiceLevelAlertHelper } from '@cdktn/provider-newrelic'

dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.generateConfigForImport"></a>

```typescript
import { dataNewrelicServiceLevelAlertHelper } from '@cdktn/provider-newrelic'

dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataNewrelicServiceLevelAlertHelper resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNewrelicServiceLevelAlertHelper to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNewrelicServiceLevelAlertHelper that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/service_level_alert_helper#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataNewrelicServiceLevelAlertHelper to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.evaluationPeriod">evaluationPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.nrql">nrql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.toleratedBudgetConsumption">toleratedBudgetConsumption</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.alertTypeInput">alertTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customEvaluationPeriodInput">customEvaluationPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customToleratedBudgetConsumptionInput">customToleratedBudgetConsumptionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.isBadEventsInput">isBadEventsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sliGuidInput">sliGuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloPeriodInput">sloPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloTargetInput">sloTargetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.alertType">alertType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customEvaluationPeriod">customEvaluationPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customToleratedBudgetConsumption">customToleratedBudgetConsumption</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.isBadEvents">isBadEvents</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sliGuid">sliGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloPeriod">sloPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloTarget">sloTarget</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `evaluationPeriod`<sup>Required</sup> <a name="evaluationPeriod" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.evaluationPeriod"></a>

```typescript
public readonly evaluationPeriod: number;
```

- *Type:* number

---

##### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.nrql"></a>

```typescript
public readonly nrql: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `toleratedBudgetConsumption`<sup>Required</sup> <a name="toleratedBudgetConsumption" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.toleratedBudgetConsumption"></a>

```typescript
public readonly toleratedBudgetConsumption: number;
```

- *Type:* number

---

##### `alertTypeInput`<sup>Optional</sup> <a name="alertTypeInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.alertTypeInput"></a>

```typescript
public readonly alertTypeInput: string;
```

- *Type:* string

---

##### `customEvaluationPeriodInput`<sup>Optional</sup> <a name="customEvaluationPeriodInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customEvaluationPeriodInput"></a>

```typescript
public readonly customEvaluationPeriodInput: number;
```

- *Type:* number

---

##### `customToleratedBudgetConsumptionInput`<sup>Optional</sup> <a name="customToleratedBudgetConsumptionInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customToleratedBudgetConsumptionInput"></a>

```typescript
public readonly customToleratedBudgetConsumptionInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isBadEventsInput`<sup>Optional</sup> <a name="isBadEventsInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.isBadEventsInput"></a>

```typescript
public readonly isBadEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sliGuidInput`<sup>Optional</sup> <a name="sliGuidInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sliGuidInput"></a>

```typescript
public readonly sliGuidInput: string;
```

- *Type:* string

---

##### `sloPeriodInput`<sup>Optional</sup> <a name="sloPeriodInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloPeriodInput"></a>

```typescript
public readonly sloPeriodInput: number;
```

- *Type:* number

---

##### `sloTargetInput`<sup>Optional</sup> <a name="sloTargetInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloTargetInput"></a>

```typescript
public readonly sloTargetInput: number;
```

- *Type:* number

---

##### `alertType`<sup>Required</sup> <a name="alertType" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.alertType"></a>

```typescript
public readonly alertType: string;
```

- *Type:* string

---

##### `customEvaluationPeriod`<sup>Required</sup> <a name="customEvaluationPeriod" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customEvaluationPeriod"></a>

```typescript
public readonly customEvaluationPeriod: number;
```

- *Type:* number

---

##### `customToleratedBudgetConsumption`<sup>Required</sup> <a name="customToleratedBudgetConsumption" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customToleratedBudgetConsumption"></a>

```typescript
public readonly customToleratedBudgetConsumption: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isBadEvents`<sup>Required</sup> <a name="isBadEvents" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.isBadEvents"></a>

```typescript
public readonly isBadEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sliGuid`<sup>Required</sup> <a name="sliGuid" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sliGuid"></a>

```typescript
public readonly sliGuid: string;
```

- *Type:* string

---

##### `sloPeriod`<sup>Required</sup> <a name="sloPeriod" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloPeriod"></a>

```typescript
public readonly sloPeriod: number;
```

- *Type:* number

---

##### `sloTarget`<sup>Required</sup> <a name="sloTarget" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloTarget"></a>

```typescript
public readonly sloTarget: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicServiceLevelAlertHelperConfig <a name="DataNewrelicServiceLevelAlertHelperConfig" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.Initializer"></a>

```typescript
import { dataNewrelicServiceLevelAlertHelper } from '@cdktn/provider-newrelic'

const dataNewrelicServiceLevelAlertHelperConfig: dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.alertType">alertType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/service_level_alert_helper#alert_type DataNewrelicServiceLevelAlertHelper#alert_type}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.sliGuid">sliGuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/service_level_alert_helper#sli_guid DataNewrelicServiceLevelAlertHelper#sli_guid}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.sloPeriod">sloPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/service_level_alert_helper#slo_period DataNewrelicServiceLevelAlertHelper#slo_period}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.sloTarget">sloTarget</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/service_level_alert_helper#slo_target DataNewrelicServiceLevelAlertHelper#slo_target}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.customEvaluationPeriod">customEvaluationPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/service_level_alert_helper#custom_evaluation_period DataNewrelicServiceLevelAlertHelper#custom_evaluation_period}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.customToleratedBudgetConsumption">customToleratedBudgetConsumption</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/service_level_alert_helper#custom_tolerated_budget_consumption DataNewrelicServiceLevelAlertHelper#custom_tolerated_budget_consumption}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/service_level_alert_helper#id DataNewrelicServiceLevelAlertHelper#id}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.isBadEvents">isBadEvents</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/service_level_alert_helper#is_bad_events DataNewrelicServiceLevelAlertHelper#is_bad_events}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `alertType`<sup>Required</sup> <a name="alertType" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.alertType"></a>

```typescript
public readonly alertType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/service_level_alert_helper#alert_type DataNewrelicServiceLevelAlertHelper#alert_type}.

---

##### `sliGuid`<sup>Required</sup> <a name="sliGuid" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.sliGuid"></a>

```typescript
public readonly sliGuid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/service_level_alert_helper#sli_guid DataNewrelicServiceLevelAlertHelper#sli_guid}.

---

##### `sloPeriod`<sup>Required</sup> <a name="sloPeriod" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.sloPeriod"></a>

```typescript
public readonly sloPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/service_level_alert_helper#slo_period DataNewrelicServiceLevelAlertHelper#slo_period}.

---

##### `sloTarget`<sup>Required</sup> <a name="sloTarget" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.sloTarget"></a>

```typescript
public readonly sloTarget: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/service_level_alert_helper#slo_target DataNewrelicServiceLevelAlertHelper#slo_target}.

---

##### `customEvaluationPeriod`<sup>Optional</sup> <a name="customEvaluationPeriod" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.customEvaluationPeriod"></a>

```typescript
public readonly customEvaluationPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/service_level_alert_helper#custom_evaluation_period DataNewrelicServiceLevelAlertHelper#custom_evaluation_period}.

---

##### `customToleratedBudgetConsumption`<sup>Optional</sup> <a name="customToleratedBudgetConsumption" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.customToleratedBudgetConsumption"></a>

```typescript
public readonly customToleratedBudgetConsumption: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/service_level_alert_helper#custom_tolerated_budget_consumption DataNewrelicServiceLevelAlertHelper#custom_tolerated_budget_consumption}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/service_level_alert_helper#id DataNewrelicServiceLevelAlertHelper#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isBadEvents`<sup>Optional</sup> <a name="isBadEvents" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.isBadEvents"></a>

```typescript
public readonly isBadEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/service_level_alert_helper#is_bad_events DataNewrelicServiceLevelAlertHelper#is_bad_events}.

---



