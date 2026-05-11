# `dataNewrelicSyntheticsSecureCredential` Submodule <a name="`dataNewrelicSyntheticsSecureCredential` Submodule" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicSyntheticsSecureCredential <a name="DataNewrelicSyntheticsSecureCredential" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.2/docs/data-sources/synthetics_secure_credential newrelic_synthetics_secure_credential}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new DataNewrelicSyntheticsSecureCredential(Construct Scope, string Id, DataNewrelicSyntheticsSecureCredentialConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig">DataNewrelicSyntheticsSecureCredentialConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig">DataNewrelicSyntheticsSecureCredentialConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataNewrelicSyntheticsSecureCredential resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

DataNewrelicSyntheticsSecureCredential.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

DataNewrelicSyntheticsSecureCredential.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

DataNewrelicSyntheticsSecureCredential.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

DataNewrelicSyntheticsSecureCredential.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataNewrelicSyntheticsSecureCredential resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNewrelicSyntheticsSecureCredential to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNewrelicSyntheticsSecureCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.2/docs/data-sources/synthetics_secure_credential#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataNewrelicSyntheticsSecureCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.lastUpdated">LastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.key">Key</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.lastUpdated"></a>

```csharp
public string LastUpdated { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredential.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicSyntheticsSecureCredentialConfig <a name="DataNewrelicSyntheticsSecureCredentialConfig" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new DataNewrelicSyntheticsSecureCredentialConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Key,
    double AccountId = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig.property.key">Key</a></code> | <code>string</code> | The secure credential's key name. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig.property.accountId">AccountId</a></code> | <code>double</code> | The New Relic account ID associated with this secure credential. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.2/docs/data-sources/synthetics_secure_credential#id DataNewrelicSyntheticsSecureCredential#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The secure credential's key name.

Regardless of the case used in the configuration, the provider will provide an upcased key to the underlying API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.2/docs/data-sources/synthetics_secure_credential#key DataNewrelicSyntheticsSecureCredential#key}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The New Relic account ID associated with this secure credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.2/docs/data-sources/synthetics_secure_credential#account_id DataNewrelicSyntheticsSecureCredential#account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.dataNewrelicSyntheticsSecureCredential.DataNewrelicSyntheticsSecureCredentialConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.2/docs/data-sources/synthetics_secure_credential#id DataNewrelicSyntheticsSecureCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



