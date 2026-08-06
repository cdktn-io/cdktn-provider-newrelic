# `cloudAwsEuSovereignLinkAccount` Submodule <a name="`cloudAwsEuSovereignLinkAccount` Submodule" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAwsEuSovereignLinkAccount <a name="CloudAwsEuSovereignLinkAccount" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_aws_eu_sovereign_link_account newrelic_cloud_aws_eu_sovereign_link_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudAwsEuSovereignLinkAccount(Construct Scope, string Id, CloudAwsEuSovereignLinkAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig">CloudAwsEuSovereignLinkAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig">CloudAwsEuSovereignLinkAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.resetMetricCollectionMode">ResetMetricCollectionMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetricCollectionMode` <a name="ResetMetricCollectionMode" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.resetMetricCollectionMode"></a>

```csharp
private void ResetMetricCollectionMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudAwsEuSovereignLinkAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

CloudAwsEuSovereignLinkAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

CloudAwsEuSovereignLinkAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

CloudAwsEuSovereignLinkAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

CloudAwsEuSovereignLinkAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudAwsEuSovereignLinkAccount resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudAwsEuSovereignLinkAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudAwsEuSovereignLinkAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_aws_eu_sovereign_link_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudAwsEuSovereignLinkAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.metricCollectionModeInput">MetricCollectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.metricCollectionMode">MetricCollectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetricCollectionModeInput`<sup>Optional</sup> <a name="MetricCollectionModeInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.metricCollectionModeInput"></a>

```csharp
public string MetricCollectionModeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetricCollectionMode`<sup>Required</sup> <a name="MetricCollectionMode" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.metricCollectionMode"></a>

```csharp
public string MetricCollectionMode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAwsEuSovereignLinkAccountConfig <a name="CloudAwsEuSovereignLinkAccountConfig" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudAwsEuSovereignLinkAccountConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Arn,
    string Name,
    double AccountId = null,
    string Id = null,
    string MetricCollectionMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.arn">Arn</a></code> | <code>string</code> | The ARN of the IAM role. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.name">Name</a></code> | <code>string</code> | The name of the AWS EU Sovereign account in New Relic. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.accountId">AccountId</a></code> | <code>double</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_aws_eu_sovereign_link_account#id CloudAwsEuSovereignLinkAccount#id}. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.metricCollectionMode">MetricCollectionMode</a></code> | <code>string</code> | How metrics are collected. PULL or PUSH. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

The ARN of the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_aws_eu_sovereign_link_account#arn CloudAwsEuSovereignLinkAccount#arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the AWS EU Sovereign account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_aws_eu_sovereign_link_account#name CloudAwsEuSovereignLinkAccount#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_aws_eu_sovereign_link_account#account_id CloudAwsEuSovereignLinkAccount#account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_aws_eu_sovereign_link_account#id CloudAwsEuSovereignLinkAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetricCollectionMode`<sup>Optional</sup> <a name="MetricCollectionMode" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.metricCollectionMode"></a>

```csharp
public string MetricCollectionMode { get; set; }
```

- *Type:* string

How metrics are collected. PULL or PUSH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_aws_eu_sovereign_link_account#metric_collection_mode CloudAwsEuSovereignLinkAccount#metric_collection_mode}

---



