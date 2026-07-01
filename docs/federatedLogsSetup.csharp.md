# `federatedLogsSetup` Submodule <a name="`federatedLogsSetup` Submodule" id="@cdktn/provider-newrelic.federatedLogsSetup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FederatedLogsSetup <a name="FederatedLogsSetup" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup newrelic_federated_logs_setup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetup(Construct Scope, string Id, FederatedLogsSetupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig">FederatedLogsSetupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig">FederatedLogsSetupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putDefaultPartition">PutDefaultPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putForwarder">PutForwarder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetForwarder">ResetForwarder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultPartition` <a name="PutDefaultPartition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putDefaultPartition"></a>

```csharp
private void PutDefaultPartition(FederatedLogsSetupDefaultPartition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putDefaultPartition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a>

---

##### `PutForwarder` <a name="PutForwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putForwarder"></a>

```csharp
private void PutForwarder(FederatedLogsSetupForwarder Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putForwarder.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a>

---

##### `PutStorage` <a name="PutStorage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putStorage"></a>

```csharp
private void PutStorage(FederatedLogsSetupStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetActive` <a name="ResetActive" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetActive"></a>

```csharp
private void ResetActive()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetForwarder` <a name="ResetForwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetForwarder"></a>

```csharp
private void ResetForwarder()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FederatedLogsSetup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

FederatedLogsSetup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

FederatedLogsSetup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

FederatedLogsSetup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

FederatedLogsSetup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FederatedLogsSetup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FederatedLogsSetup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FederatedLogsSetup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FederatedLogsSetup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartition">DefaultPartition</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference">FederatedLogsSetupDefaultPartitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartitionId">DefaultPartitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forwarder">Forwarder</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference">FederatedLogsSetupForwarderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList">FederatedLogsSetupHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.lifecycleStatus">LifecycleStatus</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList">FederatedLogsSetupLifecycleStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference">FederatedLogsSetupStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.activeInput">ActiveInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartitionInput">DefaultPartitionInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forwarderInput">ForwarderInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.storageInput">StorageInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.active">Active</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DefaultPartition`<sup>Required</sup> <a name="DefaultPartition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartition"></a>

```csharp
public FederatedLogsSetupDefaultPartitionOutputReference DefaultPartition { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference">FederatedLogsSetupDefaultPartitionOutputReference</a>

---

##### `DefaultPartitionId`<sup>Required</sup> <a name="DefaultPartitionId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartitionId"></a>

```csharp
public string DefaultPartitionId { get; }
```

- *Type:* string

---

##### `Forwarder`<sup>Required</sup> <a name="Forwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forwarder"></a>

```csharp
public FederatedLogsSetupForwarderOutputReference Forwarder { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference">FederatedLogsSetupForwarderOutputReference</a>

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.healthCheck"></a>

```csharp
public FederatedLogsSetupHealthCheckList HealthCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList">FederatedLogsSetupHealthCheckList</a>

---

##### `LifecycleStatus`<sup>Required</sup> <a name="LifecycleStatus" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.lifecycleStatus"></a>

```csharp
public FederatedLogsSetupLifecycleStatusList LifecycleStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList">FederatedLogsSetupLifecycleStatusList</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.storage"></a>

```csharp
public FederatedLogsSetupStorageOutputReference Storage { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference">FederatedLogsSetupStorageOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.activeInput"></a>

```csharp
public bool|IResolvable ActiveInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DefaultPartitionInput`<sup>Optional</sup> <a name="DefaultPartitionInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartitionInput"></a>

```csharp
public FederatedLogsSetupDefaultPartition DefaultPartitionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ForwarderInput`<sup>Optional</sup> <a name="ForwarderInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forwarderInput"></a>

```csharp
public FederatedLogsSetupForwarder ForwarderInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.storageInput"></a>

```csharp
public FederatedLogsSetupStorage StorageInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.active"></a>

```csharp
public bool|IResolvable Active { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FederatedLogsSetupConfig <a name="FederatedLogsSetupConfig" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    FederatedLogsSetupDefaultPartition DefaultPartition,
    string Name,
    FederatedLogsSetupStorage Storage,
    double AccountId = null,
    bool|IResolvable Active = null,
    string Description = null,
    FederatedLogsSetupForwarder Forwarder = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.defaultPartition">DefaultPartition</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a></code> | default_partition block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.name">Name</a></code> | <code>string</code> | The name of the federated log setup. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.accountId">AccountId</a></code> | <code>double</code> | The New Relic account ID where the federated logs setup will live. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.active">Active</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the setup is active. When false, log routing to this setup is turned off. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.description">Description</a></code> | <code>string</code> | The description of the federated log setup. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.forwarder">Forwarder</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a></code> | forwarder block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#id FederatedLogsSetup#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DefaultPartition`<sup>Required</sup> <a name="DefaultPartition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.defaultPartition"></a>

```csharp
public FederatedLogsSetupDefaultPartition DefaultPartition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a>

default_partition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#default_partition FederatedLogsSetup#default_partition}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the federated log setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#name FederatedLogsSetup#name}

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.storage"></a>

```csharp
public FederatedLogsSetupStorage Storage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#storage FederatedLogsSetup#storage}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The New Relic account ID where the federated logs setup will live.

Defaults to the provider's account_id. Changing this after creation is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#account_id FederatedLogsSetup#account_id}

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.active"></a>

```csharp
public bool|IResolvable Active { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the setup is active. When false, log routing to this setup is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#active FederatedLogsSetup#active}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the federated log setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#description FederatedLogsSetup#description}

---

##### `Forwarder`<sup>Optional</sup> <a name="Forwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.forwarder"></a>

```csharp
public FederatedLogsSetupForwarder Forwarder { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a>

forwarder block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#forwarder FederatedLogsSetup#forwarder}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#id FederatedLogsSetup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### FederatedLogsSetupDefaultPartition <a name="FederatedLogsSetupDefaultPartition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupDefaultPartition {
    FederatedLogsSetupDefaultPartitionStorage Storage,
    FederatedLogsSetupDefaultPartitionDataRetentionPolicy DataRetentionPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.property.dataRetentionPolicy">DataRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a></code> | data_retention_policy block. |

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.property.storage"></a>

```csharp
public FederatedLogsSetupDefaultPartitionStorage Storage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#storage FederatedLogsSetup#storage}

---

##### `DataRetentionPolicy`<sup>Optional</sup> <a name="DataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.property.dataRetentionPolicy"></a>

```csharp
public FederatedLogsSetupDefaultPartitionDataRetentionPolicy DataRetentionPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a>

data_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#data_retention_policy FederatedLogsSetup#data_retention_policy}

---

### FederatedLogsSetupDefaultPartitionDataRetentionPolicy <a name="FederatedLogsSetupDefaultPartitionDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupDefaultPartitionDataRetentionPolicy {
    double Duration,
    string Unit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.property.duration">Duration</a></code> | <code>double</code> | The duration value for retention. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.property.unit">Unit</a></code> | <code>string</code> | The time unit for the retention duration. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.property.duration"></a>

```csharp
public double Duration { get; set; }
```

- *Type:* double

The duration value for retention.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#duration FederatedLogsSetup#duration}

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

The time unit for the retention duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#unit FederatedLogsSetup#unit}

---

### FederatedLogsSetupDefaultPartitionStorage <a name="FederatedLogsSetupDefaultPartitionStorage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupDefaultPartitionStorage {
    string DataLocationUri,
    string Table
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.property.dataLocationUri">DataLocationUri</a></code> | <code>string</code> | The URI location of the partition in object storage. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.property.table">Table</a></code> | <code>string</code> | The table name associated with the default partition. |

---

##### `DataLocationUri`<sup>Required</sup> <a name="DataLocationUri" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.property.dataLocationUri"></a>

```csharp
public string DataLocationUri { get; set; }
```

- *Type:* string

The URI location of the partition in object storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#data_location_uri FederatedLogsSetup#data_location_uri}

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.property.table"></a>

```csharp
public string Table { get; set; }
```

- *Type:* string

The table name associated with the default partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#table FederatedLogsSetup#table}

---

### FederatedLogsSetupForwarder <a name="FederatedLogsSetupForwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupForwarder {
    string Type,
    FederatedLogsSetupForwarderPipelineControl PipelineControl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.property.type">Type</a></code> | <code>string</code> | The type of forwarder. Currently only PIPELINE_CONTROL is supported. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.property.pipelineControl">PipelineControl</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a></code> | pipeline_control block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of forwarder. Currently only PIPELINE_CONTROL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#type FederatedLogsSetup#type}

---

##### `PipelineControl`<sup>Optional</sup> <a name="PipelineControl" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.property.pipelineControl"></a>

```csharp
public FederatedLogsSetupForwarderPipelineControl PipelineControl { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a>

pipeline_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#pipeline_control FederatedLogsSetup#pipeline_control}

---

### FederatedLogsSetupForwarderPipelineControl <a name="FederatedLogsSetupForwarderPipelineControl" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupForwarderPipelineControl {
    string FleetId,
    FederatedLogsSetupForwarderPipelineControlRoutingRule RoutingRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.property.fleetId">FleetId</a></code> | <code>string</code> | The fleet entity GUID used for deploying the pipeline configuration. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.property.routingRule">RoutingRule</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a></code> | routing_rule block. |

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.property.fleetId"></a>

```csharp
public string FleetId { get; set; }
```

- *Type:* string

The fleet entity GUID used for deploying the pipeline configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#fleet_id FederatedLogsSetup#fleet_id}

---

##### `RoutingRule`<sup>Optional</sup> <a name="RoutingRule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.property.routingRule"></a>

```csharp
public FederatedLogsSetupForwarderPipelineControlRoutingRule RoutingRule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a>

routing_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#routing_rule FederatedLogsSetup#routing_rule}

---

### FederatedLogsSetupForwarderPipelineControlRoutingRule <a name="FederatedLogsSetupForwarderPipelineControlRoutingRule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupForwarderPipelineControlRoutingRule {
    string Expression
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule.property.expression">Expression</a></code> | <code>string</code> | OTTL expression for routing logs to this setup. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

OTTL expression for routing logs to this setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#expression FederatedLogsSetup#expression}

---

### FederatedLogsSetupHealthCheck <a name="FederatedLogsSetupHealthCheck" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupHealthCheck {

};
```


### FederatedLogsSetupHealthCheckEnd2EndDataFlow <a name="FederatedLogsSetupHealthCheckEnd2EndDataFlow" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupHealthCheckEnd2EndDataFlow {

};
```


### FederatedLogsSetupHealthCheckQueryConnection <a name="FederatedLogsSetupHealthCheckQueryConnection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupHealthCheckQueryConnection {

};
```


### FederatedLogsSetupLifecycleStatus <a name="FederatedLogsSetupLifecycleStatus" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupLifecycleStatus {

};
```


### FederatedLogsSetupStorage <a name="FederatedLogsSetupStorage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupStorage {
    FederatedLogsSetupStorageCloudProviderConfiguration CloudProviderConfiguration,
    string Database,
    string DataIngestConnectionId,
    string DataLocationBucket,
    string QueryConnectionId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.cloudProviderConfiguration">CloudProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a></code> | cloud_provider_configuration block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.database">Database</a></code> | <code>string</code> | The database name associated with the federated log setup. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.dataIngestConnectionId">DataIngestConnectionId</a></code> | <code>string</code> | The connection manager entity GUID used for writing data. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.dataLocationBucket">DataLocationBucket</a></code> | <code>string</code> | The object storage bucket where log data is stored. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.queryConnectionId">QueryConnectionId</a></code> | <code>string</code> | The connection manager entity GUID used by query workers for reading data. |

---

##### `CloudProviderConfiguration`<sup>Required</sup> <a name="CloudProviderConfiguration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.cloudProviderConfiguration"></a>

```csharp
public FederatedLogsSetupStorageCloudProviderConfiguration CloudProviderConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a>

cloud_provider_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#cloud_provider_configuration FederatedLogsSetup#cloud_provider_configuration}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database name associated with the federated log setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#database FederatedLogsSetup#database}

---

##### `DataIngestConnectionId`<sup>Required</sup> <a name="DataIngestConnectionId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.dataIngestConnectionId"></a>

```csharp
public string DataIngestConnectionId { get; set; }
```

- *Type:* string

The connection manager entity GUID used for writing data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#data_ingest_connection_id FederatedLogsSetup#data_ingest_connection_id}

---

##### `DataLocationBucket`<sup>Required</sup> <a name="DataLocationBucket" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.dataLocationBucket"></a>

```csharp
public string DataLocationBucket { get; set; }
```

- *Type:* string

The object storage bucket where log data is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#data_location_bucket FederatedLogsSetup#data_location_bucket}

---

##### `QueryConnectionId`<sup>Required</sup> <a name="QueryConnectionId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.queryConnectionId"></a>

```csharp
public string QueryConnectionId { get; set; }
```

- *Type:* string

The connection manager entity GUID used by query workers for reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#query_connection_id FederatedLogsSetup#query_connection_id}

---

### FederatedLogsSetupStorageCloudProviderConfiguration <a name="FederatedLogsSetupStorageCloudProviderConfiguration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupStorageCloudProviderConfiguration {
    string Provider,
    string Region
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.property.provider">Provider</a></code> | <code>string</code> | The cloud provider. Currently only AWS is supported. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.property.region">Region</a></code> | <code>string</code> | The cloud provider region. |

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.property.provider"></a>

```csharp
public string Provider { get; set; }
```

- *Type:* string

The cloud provider. Currently only AWS is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#provider FederatedLogsSetup#provider}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The cloud provider region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.0/docs/resources/federated_logs_setup#region FederatedLogsSetup#region}

---

## Classes <a name="Classes" id="Classes"></a>

### FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference <a name="FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.durationInput">DurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.duration">Duration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.durationInput"></a>

```csharp
public double DurationInput { get; }
```

- *Type:* double

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.duration"></a>

```csharp
public double Duration { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.internalValue"></a>

```csharp
public FederatedLogsSetupDefaultPartitionDataRetentionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a>

---


### FederatedLogsSetupDefaultPartitionOutputReference <a name="FederatedLogsSetupDefaultPartitionOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupDefaultPartitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putDataRetentionPolicy">PutDataRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resetDataRetentionPolicy">ResetDataRetentionPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataRetentionPolicy` <a name="PutDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putDataRetentionPolicy"></a>

```csharp
private void PutDataRetentionPolicy(FederatedLogsSetupDefaultPartitionDataRetentionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putDataRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a>

---

##### `PutStorage` <a name="PutStorage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putStorage"></a>

```csharp
private void PutStorage(FederatedLogsSetupDefaultPartitionStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a>

---

##### `ResetDataRetentionPolicy` <a name="ResetDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resetDataRetentionPolicy"></a>

```csharp
private void ResetDataRetentionPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.dataRetentionPolicy">DataRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference">FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference">FederatedLogsSetupDefaultPartitionStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.dataRetentionPolicyInput">DataRetentionPolicyInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.storageInput">StorageInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataRetentionPolicy`<sup>Required</sup> <a name="DataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.dataRetentionPolicy"></a>

```csharp
public FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference DataRetentionPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference">FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.storage"></a>

```csharp
public FederatedLogsSetupDefaultPartitionStorageOutputReference Storage { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference">FederatedLogsSetupDefaultPartitionStorageOutputReference</a>

---

##### `DataRetentionPolicyInput`<sup>Optional</sup> <a name="DataRetentionPolicyInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.dataRetentionPolicyInput"></a>

```csharp
public FederatedLogsSetupDefaultPartitionDataRetentionPolicy DataRetentionPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a>

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.storageInput"></a>

```csharp
public FederatedLogsSetupDefaultPartitionStorage StorageInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.internalValue"></a>

```csharp
public FederatedLogsSetupDefaultPartition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a>

---


### FederatedLogsSetupDefaultPartitionStorageOutputReference <a name="FederatedLogsSetupDefaultPartitionStorageOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupDefaultPartitionStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.dataLocationUriInput">DataLocationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.tableInput">TableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.dataLocationUri">DataLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.table">Table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataLocationUriInput`<sup>Optional</sup> <a name="DataLocationUriInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.dataLocationUriInput"></a>

```csharp
public string DataLocationUriInput { get; }
```

- *Type:* string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.tableInput"></a>

```csharp
public string TableInput { get; }
```

- *Type:* string

---

##### `DataLocationUri`<sup>Required</sup> <a name="DataLocationUri" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.dataLocationUri"></a>

```csharp
public string DataLocationUri { get; }
```

- *Type:* string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.table"></a>

```csharp
public string Table { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.internalValue"></a>

```csharp
public FederatedLogsSetupDefaultPartitionStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a>

---


### FederatedLogsSetupForwarderOutputReference <a name="FederatedLogsSetupForwarderOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupForwarderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.putPipelineControl">PutPipelineControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resetPipelineControl">ResetPipelineControl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPipelineControl` <a name="PutPipelineControl" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.putPipelineControl"></a>

```csharp
private void PutPipelineControl(FederatedLogsSetupForwarderPipelineControl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.putPipelineControl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a>

---

##### `ResetPipelineControl` <a name="ResetPipelineControl" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resetPipelineControl"></a>

```csharp
private void ResetPipelineControl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.pipelineControl">PipelineControl</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference">FederatedLogsSetupForwarderPipelineControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.pipelineControlInput">PipelineControlInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PipelineControl`<sup>Required</sup> <a name="PipelineControl" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.pipelineControl"></a>

```csharp
public FederatedLogsSetupForwarderPipelineControlOutputReference PipelineControl { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference">FederatedLogsSetupForwarderPipelineControlOutputReference</a>

---

##### `PipelineControlInput`<sup>Optional</sup> <a name="PipelineControlInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.pipelineControlInput"></a>

```csharp
public FederatedLogsSetupForwarderPipelineControl PipelineControlInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.internalValue"></a>

```csharp
public FederatedLogsSetupForwarder InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a>

---


### FederatedLogsSetupForwarderPipelineControlOutputReference <a name="FederatedLogsSetupForwarderPipelineControlOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupForwarderPipelineControlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.putRoutingRule">PutRoutingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resetRoutingRule">ResetRoutingRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRoutingRule` <a name="PutRoutingRule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.putRoutingRule"></a>

```csharp
private void PutRoutingRule(FederatedLogsSetupForwarderPipelineControlRoutingRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.putRoutingRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a>

---

##### `ResetRoutingRule` <a name="ResetRoutingRule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resetRoutingRule"></a>

```csharp
private void ResetRoutingRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.routingRule">RoutingRule</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference">FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fleetIdInput">FleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.routingRuleInput">RoutingRuleInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fleetId">FleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoutingRule`<sup>Required</sup> <a name="RoutingRule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.routingRule"></a>

```csharp
public FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference RoutingRule { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference">FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference</a>

---

##### `FleetIdInput`<sup>Optional</sup> <a name="FleetIdInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fleetIdInput"></a>

```csharp
public string FleetIdInput { get; }
```

- *Type:* string

---

##### `RoutingRuleInput`<sup>Optional</sup> <a name="RoutingRuleInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.routingRuleInput"></a>

```csharp
public FederatedLogsSetupForwarderPipelineControlRoutingRule RoutingRuleInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a>

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fleetId"></a>

```csharp
public string FleetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.internalValue"></a>

```csharp
public FederatedLogsSetupForwarderPipelineControl InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a>

---


### FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference <a name="FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.internalValue"></a>

```csharp
public FederatedLogsSetupForwarderPipelineControlRoutingRule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a>

---


### FederatedLogsSetupHealthCheckEnd2EndDataFlowList <a name="FederatedLogsSetupHealthCheckEnd2EndDataFlowList" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupHealthCheckEnd2EndDataFlowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.get"></a>

```csharp
private FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference <a name="FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow">FederatedLogsSetupHealthCheckEnd2EndDataFlow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.internalValue"></a>

```csharp
public FederatedLogsSetupHealthCheckEnd2EndDataFlow InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow">FederatedLogsSetupHealthCheckEnd2EndDataFlow</a>

---


### FederatedLogsSetupHealthCheckList <a name="FederatedLogsSetupHealthCheckList" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupHealthCheckList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.get"></a>

```csharp
private FederatedLogsSetupHealthCheckOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FederatedLogsSetupHealthCheckOutputReference <a name="FederatedLogsSetupHealthCheckOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.end2EndDataFlow">End2EndDataFlow</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList">FederatedLogsSetupHealthCheckEnd2EndDataFlowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.queryConnection">QueryConnection</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList">FederatedLogsSetupHealthCheckQueryConnectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheck">FederatedLogsSetupHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `End2EndDataFlow`<sup>Required</sup> <a name="End2EndDataFlow" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.end2EndDataFlow"></a>

```csharp
public FederatedLogsSetupHealthCheckEnd2EndDataFlowList End2EndDataFlow { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList">FederatedLogsSetupHealthCheckEnd2EndDataFlowList</a>

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `QueryConnection`<sup>Required</sup> <a name="QueryConnection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.queryConnection"></a>

```csharp
public FederatedLogsSetupHealthCheckQueryConnectionList QueryConnection { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList">FederatedLogsSetupHealthCheckQueryConnectionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.internalValue"></a>

```csharp
public FederatedLogsSetupHealthCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheck">FederatedLogsSetupHealthCheck</a>

---


### FederatedLogsSetupHealthCheckQueryConnectionList <a name="FederatedLogsSetupHealthCheckQueryConnectionList" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupHealthCheckQueryConnectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.get"></a>

```csharp
private FederatedLogsSetupHealthCheckQueryConnectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FederatedLogsSetupHealthCheckQueryConnectionOutputReference <a name="FederatedLogsSetupHealthCheckQueryConnectionOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupHealthCheckQueryConnectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection">FederatedLogsSetupHealthCheckQueryConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.internalValue"></a>

```csharp
public FederatedLogsSetupHealthCheckQueryConnection InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection">FederatedLogsSetupHealthCheckQueryConnection</a>

---


### FederatedLogsSetupLifecycleStatusList <a name="FederatedLogsSetupLifecycleStatusList" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupLifecycleStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.get"></a>

```csharp
private FederatedLogsSetupLifecycleStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FederatedLogsSetupLifecycleStatusOutputReference <a name="FederatedLogsSetupLifecycleStatusOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupLifecycleStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatus">FederatedLogsSetupLifecycleStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.internalValue"></a>

```csharp
public FederatedLogsSetupLifecycleStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatus">FederatedLogsSetupLifecycleStatus</a>

---


### FederatedLogsSetupStorageCloudProviderConfigurationOutputReference <a name="FederatedLogsSetupStorageCloudProviderConfigurationOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupStorageCloudProviderConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.providerInput">ProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.provider">Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.providerInput"></a>

```csharp
public string ProviderInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.provider"></a>

```csharp
public string Provider { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.internalValue"></a>

```csharp
public FederatedLogsSetupStorageCloudProviderConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a>

---


### FederatedLogsSetupStorageOutputReference <a name="FederatedLogsSetupStorageOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new FederatedLogsSetupStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.putCloudProviderConfiguration">PutCloudProviderConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudProviderConfiguration` <a name="PutCloudProviderConfiguration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.putCloudProviderConfiguration"></a>

```csharp
private void PutCloudProviderConfiguration(FederatedLogsSetupStorageCloudProviderConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.putCloudProviderConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.cloudProviderConfiguration">CloudProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference">FederatedLogsSetupStorageCloudProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.cloudProviderConfigurationInput">CloudProviderConfigurationInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataIngestConnectionIdInput">DataIngestConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataLocationBucketInput">DataLocationBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.queryConnectionIdInput">QueryConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataIngestConnectionId">DataIngestConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataLocationBucket">DataLocationBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.queryConnectionId">QueryConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudProviderConfiguration`<sup>Required</sup> <a name="CloudProviderConfiguration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.cloudProviderConfiguration"></a>

```csharp
public FederatedLogsSetupStorageCloudProviderConfigurationOutputReference CloudProviderConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference">FederatedLogsSetupStorageCloudProviderConfigurationOutputReference</a>

---

##### `CloudProviderConfigurationInput`<sup>Optional</sup> <a name="CloudProviderConfigurationInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.cloudProviderConfigurationInput"></a>

```csharp
public FederatedLogsSetupStorageCloudProviderConfiguration CloudProviderConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `DataIngestConnectionIdInput`<sup>Optional</sup> <a name="DataIngestConnectionIdInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataIngestConnectionIdInput"></a>

```csharp
public string DataIngestConnectionIdInput { get; }
```

- *Type:* string

---

##### `DataLocationBucketInput`<sup>Optional</sup> <a name="DataLocationBucketInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataLocationBucketInput"></a>

```csharp
public string DataLocationBucketInput { get; }
```

- *Type:* string

---

##### `QueryConnectionIdInput`<sup>Optional</sup> <a name="QueryConnectionIdInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.queryConnectionIdInput"></a>

```csharp
public string QueryConnectionIdInput { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `DataIngestConnectionId`<sup>Required</sup> <a name="DataIngestConnectionId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataIngestConnectionId"></a>

```csharp
public string DataIngestConnectionId { get; }
```

- *Type:* string

---

##### `DataLocationBucket`<sup>Required</sup> <a name="DataLocationBucket" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataLocationBucket"></a>

```csharp
public string DataLocationBucket { get; }
```

- *Type:* string

---

##### `QueryConnectionId`<sup>Required</sup> <a name="QueryConnectionId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.queryConnectionId"></a>

```csharp
public string QueryConnectionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.internalValue"></a>

```csharp
public FederatedLogsSetupStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a>

---



