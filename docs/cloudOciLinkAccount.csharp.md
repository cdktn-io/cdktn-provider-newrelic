# `cloudOciLinkAccount` Submodule <a name="`cloudOciLinkAccount` Submodule" id="@cdktn/provider-newrelic.cloudOciLinkAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudOciLinkAccount <a name="CloudOciLinkAccount" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/cloud_oci_link_account newrelic_cloud_oci_link_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudOciLinkAccount(Construct Scope, string Id, CloudOciLinkAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig">CloudOciLinkAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig">CloudOciLinkAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetIngestVaultOcid">ResetIngestVaultOcid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetInstrumentationType">ResetInstrumentationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetLoggingStackOcid">ResetLoggingStackOcid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetMetricStackOcid">ResetMetricStackOcid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetOciRegion">ResetOciRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetResourceTag">ResetResourceTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetTrustType">ResetTrustType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetUserVaultOcid">ResetUserVaultOcid</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIngestVaultOcid` <a name="ResetIngestVaultOcid" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetIngestVaultOcid"></a>

```csharp
private void ResetIngestVaultOcid()
```

##### `ResetInstrumentationType` <a name="ResetInstrumentationType" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetInstrumentationType"></a>

```csharp
private void ResetInstrumentationType()
```

##### `ResetLoggingStackOcid` <a name="ResetLoggingStackOcid" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetLoggingStackOcid"></a>

```csharp
private void ResetLoggingStackOcid()
```

##### `ResetMetricStackOcid` <a name="ResetMetricStackOcid" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetMetricStackOcid"></a>

```csharp
private void ResetMetricStackOcid()
```

##### `ResetOciRegion` <a name="ResetOciRegion" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetOciRegion"></a>

```csharp
private void ResetOciRegion()
```

##### `ResetResourceTag` <a name="ResetResourceTag" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetResourceTag"></a>

```csharp
private void ResetResourceTag()
```

##### `ResetTrustType` <a name="ResetTrustType" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetTrustType"></a>

```csharp
private void ResetTrustType()
```

##### `ResetUserVaultOcid` <a name="ResetUserVaultOcid" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetUserVaultOcid"></a>

```csharp
private void ResetUserVaultOcid()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudOciLinkAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

CloudOciLinkAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

CloudOciLinkAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

CloudOciLinkAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

CloudOciLinkAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudOciLinkAccount resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudOciLinkAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudOciLinkAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/cloud_oci_link_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudOciLinkAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.compartmentOcidInput">CompartmentOcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ingestVaultOcidInput">IngestVaultOcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.instrumentationTypeInput">InstrumentationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.loggingStackOcidInput">LoggingStackOcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.metricStackOcidInput">MetricStackOcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientIdInput">OciClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientSecretInput">OciClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociDomainUrlInput">OciDomainUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociHomeRegionInput">OciHomeRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociRegionInput">OciRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.resourceTagInput">ResourceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.trustTypeInput">TrustTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.userVaultOcidInput">UserVaultOcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ingestVaultOcid">IngestVaultOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.instrumentationType">InstrumentationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.loggingStackOcid">LoggingStackOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.metricStackOcid">MetricStackOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientId">OciClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientSecret">OciClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociDomainUrl">OciDomainUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociHomeRegion">OciHomeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociRegion">OciRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.resourceTag">ResourceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.trustType">TrustType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.userVaultOcid">UserVaultOcid</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `CompartmentOcidInput`<sup>Optional</sup> <a name="CompartmentOcidInput" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.compartmentOcidInput"></a>

```csharp
public string CompartmentOcidInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IngestVaultOcidInput`<sup>Optional</sup> <a name="IngestVaultOcidInput" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ingestVaultOcidInput"></a>

```csharp
public string IngestVaultOcidInput { get; }
```

- *Type:* string

---

##### `InstrumentationTypeInput`<sup>Optional</sup> <a name="InstrumentationTypeInput" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.instrumentationTypeInput"></a>

```csharp
public string InstrumentationTypeInput { get; }
```

- *Type:* string

---

##### `LoggingStackOcidInput`<sup>Optional</sup> <a name="LoggingStackOcidInput" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.loggingStackOcidInput"></a>

```csharp
public string LoggingStackOcidInput { get; }
```

- *Type:* string

---

##### `MetricStackOcidInput`<sup>Optional</sup> <a name="MetricStackOcidInput" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.metricStackOcidInput"></a>

```csharp
public string MetricStackOcidInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OciClientIdInput`<sup>Optional</sup> <a name="OciClientIdInput" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientIdInput"></a>

```csharp
public string OciClientIdInput { get; }
```

- *Type:* string

---

##### `OciClientSecretInput`<sup>Optional</sup> <a name="OciClientSecretInput" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientSecretInput"></a>

```csharp
public string OciClientSecretInput { get; }
```

- *Type:* string

---

##### `OciDomainUrlInput`<sup>Optional</sup> <a name="OciDomainUrlInput" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociDomainUrlInput"></a>

```csharp
public string OciDomainUrlInput { get; }
```

- *Type:* string

---

##### `OciHomeRegionInput`<sup>Optional</sup> <a name="OciHomeRegionInput" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociHomeRegionInput"></a>

```csharp
public string OciHomeRegionInput { get; }
```

- *Type:* string

---

##### `OciRegionInput`<sup>Optional</sup> <a name="OciRegionInput" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociRegionInput"></a>

```csharp
public string OciRegionInput { get; }
```

- *Type:* string

---

##### `ResourceTagInput`<sup>Optional</sup> <a name="ResourceTagInput" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.resourceTagInput"></a>

```csharp
public string ResourceTagInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TrustTypeInput`<sup>Optional</sup> <a name="TrustTypeInput" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.trustTypeInput"></a>

```csharp
public string TrustTypeInput { get; }
```

- *Type:* string

---

##### `UserVaultOcidInput`<sup>Optional</sup> <a name="UserVaultOcidInput" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.userVaultOcidInput"></a>

```csharp
public string UserVaultOcidInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IngestVaultOcid`<sup>Required</sup> <a name="IngestVaultOcid" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ingestVaultOcid"></a>

```csharp
public string IngestVaultOcid { get; }
```

- *Type:* string

---

##### `InstrumentationType`<sup>Required</sup> <a name="InstrumentationType" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.instrumentationType"></a>

```csharp
public string InstrumentationType { get; }
```

- *Type:* string

---

##### `LoggingStackOcid`<sup>Required</sup> <a name="LoggingStackOcid" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.loggingStackOcid"></a>

```csharp
public string LoggingStackOcid { get; }
```

- *Type:* string

---

##### `MetricStackOcid`<sup>Required</sup> <a name="MetricStackOcid" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.metricStackOcid"></a>

```csharp
public string MetricStackOcid { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OciClientId`<sup>Required</sup> <a name="OciClientId" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientId"></a>

```csharp
public string OciClientId { get; }
```

- *Type:* string

---

##### `OciClientSecret`<sup>Required</sup> <a name="OciClientSecret" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientSecret"></a>

```csharp
public string OciClientSecret { get; }
```

- *Type:* string

---

##### `OciDomainUrl`<sup>Required</sup> <a name="OciDomainUrl" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociDomainUrl"></a>

```csharp
public string OciDomainUrl { get; }
```

- *Type:* string

---

##### `OciHomeRegion`<sup>Required</sup> <a name="OciHomeRegion" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociHomeRegion"></a>

```csharp
public string OciHomeRegion { get; }
```

- *Type:* string

---

##### `OciRegion`<sup>Required</sup> <a name="OciRegion" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociRegion"></a>

```csharp
public string OciRegion { get; }
```

- *Type:* string

---

##### `ResourceTag`<sup>Required</sup> <a name="ResourceTag" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.resourceTag"></a>

```csharp
public string ResourceTag { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TrustType`<sup>Required</sup> <a name="TrustType" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.trustType"></a>

```csharp
public string TrustType { get; }
```

- *Type:* string

---

##### `UserVaultOcid`<sup>Required</sup> <a name="UserVaultOcid" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.userVaultOcid"></a>

```csharp
public string UserVaultOcid { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudOciLinkAccountConfig <a name="CloudOciLinkAccountConfig" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudOciLinkAccountConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CompartmentOcid,
    string Name,
    string OciClientId,
    string OciClientSecret,
    string OciDomainUrl,
    string OciHomeRegion,
    string TenantId,
    double AccountId = null,
    string Id = null,
    string IngestVaultOcid = null,
    string InstrumentationType = null,
    string LoggingStackOcid = null,
    string MetricStackOcid = null,
    string OciRegion = null,
    string ResourceTag = null,
    string TrustType = null,
    string UserVaultOcid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | The New Relic compartment OCID in OCI. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.name">Name</a></code> | <code>string</code> | The linked account name. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociClientId">OciClientId</a></code> | <code>string</code> | The client ID for OCI WIF. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociClientSecret">OciClientSecret</a></code> | <code>string</code> | The client secret for OCI WIF. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociDomainUrl">OciDomainUrl</a></code> | <code>string</code> | The OCI domain URL for WIF. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociHomeRegion">OciHomeRegion</a></code> | <code>string</code> | The home region of the tenancy. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.tenantId">TenantId</a></code> | <code>string</code> | The OCI tenant identifier. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.accountId">AccountId</a></code> | <code>double</code> | The New Relic account ID where you want to link the OCI account. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/cloud_oci_link_account#id CloudOciLinkAccount#id}. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ingestVaultOcid">IngestVaultOcid</a></code> | <code>string</code> | The OCI ingest secret OCID. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.instrumentationType">InstrumentationType</a></code> | <code>string</code> | Specifies the type of integration, such as metrics, logs, or a combination of logs and metrics. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.loggingStackOcid">LoggingStackOcid</a></code> | <code>string</code> | The Logging stack identifier for the OCI account. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.metricStackOcid">MetricStackOcid</a></code> | <code>string</code> | The metric stack identifier for the OCI account. This field is only used for updates, not during initial creation. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociRegion">OciRegion</a></code> | <code>string</code> | The OCI region for the account. This field is only used for updates, not during initial creation. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.resourceTag">ResourceTag</a></code> | <code>string</code> | Optional value propagated as the ext_resource_tag claim on the RPST for tag-based scoping in customer IAM policies. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.trustType">TrustType</a></code> | <code>string</code> | OCI WIF trust type. |
| <code><a href="#@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.userVaultOcid">UserVaultOcid</a></code> | <code>string</code> | The user secret OCID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; set; }
```

- *Type:* string

The New Relic compartment OCID in OCI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/cloud_oci_link_account#compartment_ocid CloudOciLinkAccount#compartment_ocid}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The linked account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/cloud_oci_link_account#name CloudOciLinkAccount#name}

---

##### `OciClientId`<sup>Required</sup> <a name="OciClientId" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociClientId"></a>

```csharp
public string OciClientId { get; set; }
```

- *Type:* string

The client ID for OCI WIF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/cloud_oci_link_account#oci_client_id CloudOciLinkAccount#oci_client_id}

---

##### `OciClientSecret`<sup>Required</sup> <a name="OciClientSecret" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociClientSecret"></a>

```csharp
public string OciClientSecret { get; set; }
```

- *Type:* string

The client secret for OCI WIF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/cloud_oci_link_account#oci_client_secret CloudOciLinkAccount#oci_client_secret}

---

##### `OciDomainUrl`<sup>Required</sup> <a name="OciDomainUrl" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociDomainUrl"></a>

```csharp
public string OciDomainUrl { get; set; }
```

- *Type:* string

The OCI domain URL for WIF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/cloud_oci_link_account#oci_domain_url CloudOciLinkAccount#oci_domain_url}

---

##### `OciHomeRegion`<sup>Required</sup> <a name="OciHomeRegion" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociHomeRegion"></a>

```csharp
public string OciHomeRegion { get; set; }
```

- *Type:* string

The home region of the tenancy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/cloud_oci_link_account#oci_home_region CloudOciLinkAccount#oci_home_region}

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

The OCI tenant identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/cloud_oci_link_account#tenant_id CloudOciLinkAccount#tenant_id}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The New Relic account ID where you want to link the OCI account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/cloud_oci_link_account#account_id CloudOciLinkAccount#account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/cloud_oci_link_account#id CloudOciLinkAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IngestVaultOcid`<sup>Optional</sup> <a name="IngestVaultOcid" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ingestVaultOcid"></a>

```csharp
public string IngestVaultOcid { get; set; }
```

- *Type:* string

The OCI ingest secret OCID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/cloud_oci_link_account#ingest_vault_ocid CloudOciLinkAccount#ingest_vault_ocid}

---

##### `InstrumentationType`<sup>Optional</sup> <a name="InstrumentationType" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.instrumentationType"></a>

```csharp
public string InstrumentationType { get; set; }
```

- *Type:* string

Specifies the type of integration, such as metrics, logs, or a combination of logs and metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/cloud_oci_link_account#instrumentation_type CloudOciLinkAccount#instrumentation_type}

---

##### `LoggingStackOcid`<sup>Optional</sup> <a name="LoggingStackOcid" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.loggingStackOcid"></a>

```csharp
public string LoggingStackOcid { get; set; }
```

- *Type:* string

The Logging stack identifier for the OCI account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/cloud_oci_link_account#logging_stack_ocid CloudOciLinkAccount#logging_stack_ocid}

---

##### `MetricStackOcid`<sup>Optional</sup> <a name="MetricStackOcid" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.metricStackOcid"></a>

```csharp
public string MetricStackOcid { get; set; }
```

- *Type:* string

The metric stack identifier for the OCI account. This field is only used for updates, not during initial creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/cloud_oci_link_account#metric_stack_ocid CloudOciLinkAccount#metric_stack_ocid}

---

##### `OciRegion`<sup>Optional</sup> <a name="OciRegion" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociRegion"></a>

```csharp
public string OciRegion { get; set; }
```

- *Type:* string

The OCI region for the account. This field is only used for updates, not during initial creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/cloud_oci_link_account#oci_region CloudOciLinkAccount#oci_region}

---

##### `ResourceTag`<sup>Optional</sup> <a name="ResourceTag" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.resourceTag"></a>

```csharp
public string ResourceTag { get; set; }
```

- *Type:* string

Optional value propagated as the ext_resource_tag claim on the RPST for tag-based scoping in customer IAM policies.

Ignored for UPST. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/cloud_oci_link_account#resource_tag CloudOciLinkAccount#resource_tag}

---

##### `TrustType`<sup>Optional</sup> <a name="TrustType" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.trustType"></a>

```csharp
public string TrustType { get; set; }
```

- *Type:* string

OCI WIF trust type.

Allowed: UPST (default), RPST. RPST uses claim-based ephemeral principals; UPST impersonates a service user. Cannot be changed after creation — re-create the linked account to switch trust types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/cloud_oci_link_account#trust_type CloudOciLinkAccount#trust_type}

---

##### `UserVaultOcid`<sup>Optional</sup> <a name="UserVaultOcid" id="@cdktn/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.userVaultOcid"></a>

```csharp
public string UserVaultOcid { get; set; }
```

- *Type:* string

The user secret OCID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/cloud_oci_link_account#user_vault_ocid CloudOciLinkAccount#user_vault_ocid}

---



