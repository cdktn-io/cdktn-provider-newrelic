# `dataNewrelicTeamsHierarchyLevels` Submodule <a name="`dataNewrelicTeamsHierarchyLevels` Submodule" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicTeamsHierarchyLevels <a name="DataNewrelicTeamsHierarchyLevels" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/data-sources/teams_hierarchy_levels newrelic_teams_hierarchy_levels}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new DataNewrelicTeamsHierarchyLevels(Construct Scope, string Id, DataNewrelicTeamsHierarchyLevelsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig">DataNewrelicTeamsHierarchyLevelsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig">DataNewrelicTeamsHierarchyLevelsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataNewrelicTeamsHierarchyLevels resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

DataNewrelicTeamsHierarchyLevels.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

DataNewrelicTeamsHierarchyLevels.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

DataNewrelicTeamsHierarchyLevels.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

DataNewrelicTeamsHierarchyLevels.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataNewrelicTeamsHierarchyLevels resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNewrelicTeamsHierarchyLevels to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNewrelicTeamsHierarchyLevels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/data-sources/teams_hierarchy_levels#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataNewrelicTeamsHierarchyLevels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.levels">Levels</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList">DataNewrelicTeamsHierarchyLevelsLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Levels`<sup>Required</sup> <a name="Levels" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.levels"></a>

```csharp
public DataNewrelicTeamsHierarchyLevelsLevelsList Levels { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList">DataNewrelicTeamsHierarchyLevelsLevelsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicTeamsHierarchyLevelsConfig <a name="DataNewrelicTeamsHierarchyLevelsConfig" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new DataNewrelicTeamsHierarchyLevelsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/data-sources/teams_hierarchy_levels#id DataNewrelicTeamsHierarchyLevels#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/data-sources/teams_hierarchy_levels#id DataNewrelicTeamsHierarchyLevels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataNewrelicTeamsHierarchyLevelsLevels <a name="DataNewrelicTeamsHierarchyLevelsLevels" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevels.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new DataNewrelicTeamsHierarchyLevelsLevels {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataNewrelicTeamsHierarchyLevelsLevelsList <a name="DataNewrelicTeamsHierarchyLevelsLevelsList" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new DataNewrelicTeamsHierarchyLevelsLevelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.get"></a>

```csharp
private DataNewrelicTeamsHierarchyLevelsLevelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataNewrelicTeamsHierarchyLevelsLevelsOutputReference <a name="DataNewrelicTeamsHierarchyLevelsLevelsOutputReference" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new DataNewrelicTeamsHierarchyLevelsLevelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevels">DataNewrelicTeamsHierarchyLevelsLevels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.property.internalValue"></a>

```csharp
public DataNewrelicTeamsHierarchyLevelsLevels InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevels">DataNewrelicTeamsHierarchyLevelsLevels</a>

---



