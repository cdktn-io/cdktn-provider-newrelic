# `dataNewrelicServiceLevelAlertHelper` Submodule <a name="`dataNewrelicServiceLevelAlertHelper` Submodule" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicServiceLevelAlertHelper <a name="DataNewrelicServiceLevelAlertHelper" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/service_level_alert_helper newrelic_service_level_alert_helper}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new DataNewrelicServiceLevelAlertHelper(Construct Scope, string Id, DataNewrelicServiceLevelAlertHelperConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig">DataNewrelicServiceLevelAlertHelperConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig">DataNewrelicServiceLevelAlertHelperConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetCustomEvaluationPeriod">ResetCustomEvaluationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetCustomToleratedBudgetConsumption">ResetCustomToleratedBudgetConsumption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetIsBadEvents">ResetIsBadEvents</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCustomEvaluationPeriod` <a name="ResetCustomEvaluationPeriod" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetCustomEvaluationPeriod"></a>

```csharp
private void ResetCustomEvaluationPeriod()
```

##### `ResetCustomToleratedBudgetConsumption` <a name="ResetCustomToleratedBudgetConsumption" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetCustomToleratedBudgetConsumption"></a>

```csharp
private void ResetCustomToleratedBudgetConsumption()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsBadEvents` <a name="ResetIsBadEvents" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.resetIsBadEvents"></a>

```csharp
private void ResetIsBadEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataNewrelicServiceLevelAlertHelper resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

DataNewrelicServiceLevelAlertHelper.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

DataNewrelicServiceLevelAlertHelper.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

DataNewrelicServiceLevelAlertHelper.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

DataNewrelicServiceLevelAlertHelper.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataNewrelicServiceLevelAlertHelper resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNewrelicServiceLevelAlertHelper to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNewrelicServiceLevelAlertHelper that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/service_level_alert_helper#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataNewrelicServiceLevelAlertHelper to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.evaluationPeriod">EvaluationPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.nrql">Nrql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.toleratedBudgetConsumption">ToleratedBudgetConsumption</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.alertTypeInput">AlertTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customEvaluationPeriodInput">CustomEvaluationPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customToleratedBudgetConsumptionInput">CustomToleratedBudgetConsumptionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.isBadEventsInput">IsBadEventsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sliGuidInput">SliGuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloPeriodInput">SloPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloTargetInput">SloTargetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.alertType">AlertType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customEvaluationPeriod">CustomEvaluationPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customToleratedBudgetConsumption">CustomToleratedBudgetConsumption</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.isBadEvents">IsBadEvents</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sliGuid">SliGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloPeriod">SloPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloTarget">SloTarget</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `EvaluationPeriod`<sup>Required</sup> <a name="EvaluationPeriod" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.evaluationPeriod"></a>

```csharp
public double EvaluationPeriod { get; }
```

- *Type:* double

---

##### `Nrql`<sup>Required</sup> <a name="Nrql" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.nrql"></a>

```csharp
public string Nrql { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `ToleratedBudgetConsumption`<sup>Required</sup> <a name="ToleratedBudgetConsumption" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.toleratedBudgetConsumption"></a>

```csharp
public double ToleratedBudgetConsumption { get; }
```

- *Type:* double

---

##### `AlertTypeInput`<sup>Optional</sup> <a name="AlertTypeInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.alertTypeInput"></a>

```csharp
public string AlertTypeInput { get; }
```

- *Type:* string

---

##### `CustomEvaluationPeriodInput`<sup>Optional</sup> <a name="CustomEvaluationPeriodInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customEvaluationPeriodInput"></a>

```csharp
public double CustomEvaluationPeriodInput { get; }
```

- *Type:* double

---

##### `CustomToleratedBudgetConsumptionInput`<sup>Optional</sup> <a name="CustomToleratedBudgetConsumptionInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customToleratedBudgetConsumptionInput"></a>

```csharp
public double CustomToleratedBudgetConsumptionInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsBadEventsInput`<sup>Optional</sup> <a name="IsBadEventsInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.isBadEventsInput"></a>

```csharp
public bool|IResolvable IsBadEventsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SliGuidInput`<sup>Optional</sup> <a name="SliGuidInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sliGuidInput"></a>

```csharp
public string SliGuidInput { get; }
```

- *Type:* string

---

##### `SloPeriodInput`<sup>Optional</sup> <a name="SloPeriodInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloPeriodInput"></a>

```csharp
public double SloPeriodInput { get; }
```

- *Type:* double

---

##### `SloTargetInput`<sup>Optional</sup> <a name="SloTargetInput" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloTargetInput"></a>

```csharp
public double SloTargetInput { get; }
```

- *Type:* double

---

##### `AlertType`<sup>Required</sup> <a name="AlertType" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.alertType"></a>

```csharp
public string AlertType { get; }
```

- *Type:* string

---

##### `CustomEvaluationPeriod`<sup>Required</sup> <a name="CustomEvaluationPeriod" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customEvaluationPeriod"></a>

```csharp
public double CustomEvaluationPeriod { get; }
```

- *Type:* double

---

##### `CustomToleratedBudgetConsumption`<sup>Required</sup> <a name="CustomToleratedBudgetConsumption" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.customToleratedBudgetConsumption"></a>

```csharp
public double CustomToleratedBudgetConsumption { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsBadEvents`<sup>Required</sup> <a name="IsBadEvents" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.isBadEvents"></a>

```csharp
public bool|IResolvable IsBadEvents { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SliGuid`<sup>Required</sup> <a name="SliGuid" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sliGuid"></a>

```csharp
public string SliGuid { get; }
```

- *Type:* string

---

##### `SloPeriod`<sup>Required</sup> <a name="SloPeriod" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloPeriod"></a>

```csharp
public double SloPeriod { get; }
```

- *Type:* double

---

##### `SloTarget`<sup>Required</sup> <a name="SloTarget" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.sloTarget"></a>

```csharp
public double SloTarget { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelper.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicServiceLevelAlertHelperConfig <a name="DataNewrelicServiceLevelAlertHelperConfig" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new DataNewrelicServiceLevelAlertHelperConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AlertType,
    string SliGuid,
    double SloPeriod,
    double SloTarget,
    double CustomEvaluationPeriod = null,
    double CustomToleratedBudgetConsumption = null,
    string Id = null,
    bool|IResolvable IsBadEvents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.alertType">AlertType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/service_level_alert_helper#alert_type DataNewrelicServiceLevelAlertHelper#alert_type}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.sliGuid">SliGuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/service_level_alert_helper#sli_guid DataNewrelicServiceLevelAlertHelper#sli_guid}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.sloPeriod">SloPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/service_level_alert_helper#slo_period DataNewrelicServiceLevelAlertHelper#slo_period}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.sloTarget">SloTarget</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/service_level_alert_helper#slo_target DataNewrelicServiceLevelAlertHelper#slo_target}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.customEvaluationPeriod">CustomEvaluationPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/service_level_alert_helper#custom_evaluation_period DataNewrelicServiceLevelAlertHelper#custom_evaluation_period}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.customToleratedBudgetConsumption">CustomToleratedBudgetConsumption</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/service_level_alert_helper#custom_tolerated_budget_consumption DataNewrelicServiceLevelAlertHelper#custom_tolerated_budget_consumption}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/service_level_alert_helper#id DataNewrelicServiceLevelAlertHelper#id}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.isBadEvents">IsBadEvents</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/service_level_alert_helper#is_bad_events DataNewrelicServiceLevelAlertHelper#is_bad_events}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AlertType`<sup>Required</sup> <a name="AlertType" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.alertType"></a>

```csharp
public string AlertType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/service_level_alert_helper#alert_type DataNewrelicServiceLevelAlertHelper#alert_type}.

---

##### `SliGuid`<sup>Required</sup> <a name="SliGuid" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.sliGuid"></a>

```csharp
public string SliGuid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/service_level_alert_helper#sli_guid DataNewrelicServiceLevelAlertHelper#sli_guid}.

---

##### `SloPeriod`<sup>Required</sup> <a name="SloPeriod" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.sloPeriod"></a>

```csharp
public double SloPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/service_level_alert_helper#slo_period DataNewrelicServiceLevelAlertHelper#slo_period}.

---

##### `SloTarget`<sup>Required</sup> <a name="SloTarget" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.sloTarget"></a>

```csharp
public double SloTarget { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/service_level_alert_helper#slo_target DataNewrelicServiceLevelAlertHelper#slo_target}.

---

##### `CustomEvaluationPeriod`<sup>Optional</sup> <a name="CustomEvaluationPeriod" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.customEvaluationPeriod"></a>

```csharp
public double CustomEvaluationPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/service_level_alert_helper#custom_evaluation_period DataNewrelicServiceLevelAlertHelper#custom_evaluation_period}.

---

##### `CustomToleratedBudgetConsumption`<sup>Optional</sup> <a name="CustomToleratedBudgetConsumption" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.customToleratedBudgetConsumption"></a>

```csharp
public double CustomToleratedBudgetConsumption { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/service_level_alert_helper#custom_tolerated_budget_consumption DataNewrelicServiceLevelAlertHelper#custom_tolerated_budget_consumption}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/service_level_alert_helper#id DataNewrelicServiceLevelAlertHelper#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsBadEvents`<sup>Optional</sup> <a name="IsBadEvents" id="@cdktn/provider-newrelic.dataNewrelicServiceLevelAlertHelper.DataNewrelicServiceLevelAlertHelperConfig.property.isBadEvents"></a>

```csharp
public bool|IResolvable IsBadEvents { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/service_level_alert_helper#is_bad_events DataNewrelicServiceLevelAlertHelper#is_bad_events}.

---



