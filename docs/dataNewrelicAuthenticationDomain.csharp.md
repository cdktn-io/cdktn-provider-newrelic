# `dataNewrelicAuthenticationDomain` Submodule <a name="`dataNewrelicAuthenticationDomain` Submodule" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicAuthenticationDomain <a name="DataNewrelicAuthenticationDomain" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/data-sources/authentication_domain newrelic_authentication_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new DataNewrelicAuthenticationDomain(Construct Scope, string Id, DataNewrelicAuthenticationDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig">DataNewrelicAuthenticationDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig">DataNewrelicAuthenticationDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataNewrelicAuthenticationDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

DataNewrelicAuthenticationDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

DataNewrelicAuthenticationDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

DataNewrelicAuthenticationDomain.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

DataNewrelicAuthenticationDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataNewrelicAuthenticationDomain resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNewrelicAuthenticationDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNewrelicAuthenticationDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/data-sources/authentication_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataNewrelicAuthenticationDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicAuthenticationDomainConfig <a name="DataNewrelicAuthenticationDomainConfig" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new DataNewrelicAuthenticationDomainConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.name">Name</a></code> | <code>string</code> | The name of the authentication domain to be queried. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the authentication domain to be queried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/data-sources/authentication_domain#name DataNewrelicAuthenticationDomain#name}

---



