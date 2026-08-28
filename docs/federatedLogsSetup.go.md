# `federatedLogsSetup` Submodule <a name="`federatedLogsSetup` Submodule" id="@cdktn/provider-newrelic.federatedLogsSetup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FederatedLogsSetup <a name="FederatedLogsSetup" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup newrelic_federated_logs_setup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

federatedlogssetup.NewFederatedLogsSetup(scope Construct, id *string, config FederatedLogsSetupConfig) FederatedLogsSetup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig">FederatedLogsSetupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultPartition` <a name="PutDefaultPartition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putDefaultPartition"></a>

```go
func PutDefaultPartition(value FederatedLogsSetupDefaultPartition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putDefaultPartition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a>

---

##### `PutForwarder` <a name="PutForwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putForwarder"></a>

```go
func PutForwarder(value FederatedLogsSetupForwarder)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putForwarder.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a>

---

##### `PutStorage` <a name="PutStorage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putStorage"></a>

```go
func PutStorage(value FederatedLogsSetupStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetActive` <a name="ResetActive" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetActive"></a>

```go
func ResetActive()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetForwarder` <a name="ResetForwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetForwarder"></a>

```go
func ResetForwarder()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetId"></a>

```go
func ResetId()
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

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

federatedlogssetup.FederatedLogsSetup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

federatedlogssetup.FederatedLogsSetup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

federatedlogssetup.FederatedLogsSetup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

federatedlogssetup.FederatedLogsSetup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a FederatedLogsSetup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FederatedLogsSetup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FederatedLogsSetup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the FederatedLogsSetup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartition">DefaultPartition</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference">FederatedLogsSetupDefaultPartitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartitionId">DefaultPartitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forwarder">Forwarder</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference">FederatedLogsSetupForwarderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList">FederatedLogsSetupHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.lifecycleStatus">LifecycleStatus</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList">FederatedLogsSetupLifecycleStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference">FederatedLogsSetupStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.activeInput">ActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartitionInput">DefaultPartitionInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forwarderInput">ForwarderInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.storageInput">StorageInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.active">Active</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DefaultPartition`<sup>Required</sup> <a name="DefaultPartition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartition"></a>

```go
func DefaultPartition() FederatedLogsSetupDefaultPartitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference">FederatedLogsSetupDefaultPartitionOutputReference</a>

---

##### `DefaultPartitionId`<sup>Required</sup> <a name="DefaultPartitionId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartitionId"></a>

```go
func DefaultPartitionId() *string
```

- *Type:* *string

---

##### `Forwarder`<sup>Required</sup> <a name="Forwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forwarder"></a>

```go
func Forwarder() FederatedLogsSetupForwarderOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference">FederatedLogsSetupForwarderOutputReference</a>

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.healthCheck"></a>

```go
func HealthCheck() FederatedLogsSetupHealthCheckList
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList">FederatedLogsSetupHealthCheckList</a>

---

##### `LifecycleStatus`<sup>Required</sup> <a name="LifecycleStatus" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.lifecycleStatus"></a>

```go
func LifecycleStatus() FederatedLogsSetupLifecycleStatusList
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList">FederatedLogsSetupLifecycleStatusList</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.storage"></a>

```go
func Storage() FederatedLogsSetupStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference">FederatedLogsSetupStorageOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.activeInput"></a>

```go
func ActiveInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultPartitionInput`<sup>Optional</sup> <a name="DefaultPartitionInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartitionInput"></a>

```go
func DefaultPartitionInput() FederatedLogsSetupDefaultPartition
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ForwarderInput`<sup>Optional</sup> <a name="ForwarderInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forwarderInput"></a>

```go
func ForwarderInput() FederatedLogsSetupForwarder
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.storageInput"></a>

```go
func StorageInput() FederatedLogsSetupStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.active"></a>

```go
func Active() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FederatedLogsSetupConfig <a name="FederatedLogsSetupConfig" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

&federatedlogssetup.FederatedLogsSetupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultPartition: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.federatedLogsSetup.FederatedLogsSetupDefaultPartition,
	Name: *string,
	Storage: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.federatedLogsSetup.FederatedLogsSetupStorage,
	AccountId: *f64,
	Active: interface{},
	Description: *string,
	Forwarder: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.federatedLogsSetup.FederatedLogsSetupForwarder,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.defaultPartition">DefaultPartition</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a></code> | default_partition block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.name">Name</a></code> | <code>*string</code> | The name of the federated log setup. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | The New Relic account ID where the federated logs setup will live. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.active">Active</a></code> | <code>interface{}</code> | Whether the setup is active. When false, log routing to this setup is turned off. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.description">Description</a></code> | <code>*string</code> | The description of the federated log setup. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.forwarder">Forwarder</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a></code> | forwarder block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#id FederatedLogsSetup#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultPartition`<sup>Required</sup> <a name="DefaultPartition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.defaultPartition"></a>

```go
DefaultPartition FederatedLogsSetupDefaultPartition
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a>

default_partition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#default_partition FederatedLogsSetup#default_partition}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the federated log setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#name FederatedLogsSetup#name}

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.storage"></a>

```go
Storage FederatedLogsSetupStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#storage FederatedLogsSetup#storage}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The New Relic account ID where the federated logs setup will live.

Defaults to the provider's account_id. Changing this after creation is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#account_id FederatedLogsSetup#account_id}

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.active"></a>

```go
Active interface{}
```

- *Type:* interface{}

Whether the setup is active. When false, log routing to this setup is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#active FederatedLogsSetup#active}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the federated log setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#description FederatedLogsSetup#description}

---

##### `Forwarder`<sup>Optional</sup> <a name="Forwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.forwarder"></a>

```go
Forwarder FederatedLogsSetupForwarder
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a>

forwarder block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#forwarder FederatedLogsSetup#forwarder}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#id FederatedLogsSetup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### FederatedLogsSetupDefaultPartition <a name="FederatedLogsSetupDefaultPartition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

&federatedlogssetup.FederatedLogsSetupDefaultPartition {
	Storage: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage,
	DataRetentionPolicy: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.property.dataRetentionPolicy">DataRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a></code> | data_retention_policy block. |

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.property.storage"></a>

```go
Storage FederatedLogsSetupDefaultPartitionStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#storage FederatedLogsSetup#storage}

---

##### `DataRetentionPolicy`<sup>Optional</sup> <a name="DataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.property.dataRetentionPolicy"></a>

```go
DataRetentionPolicy FederatedLogsSetupDefaultPartitionDataRetentionPolicy
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a>

data_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#data_retention_policy FederatedLogsSetup#data_retention_policy}

---

### FederatedLogsSetupDefaultPartitionDataRetentionPolicy <a name="FederatedLogsSetupDefaultPartitionDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

&federatedlogssetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy {
	Duration: *f64,
	Unit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.property.duration">Duration</a></code> | <code>*f64</code> | The duration value for retention. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.property.unit">Unit</a></code> | <code>*string</code> | The time unit for the retention duration. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.property.duration"></a>

```go
Duration *f64
```

- *Type:* *f64

The duration value for retention.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#duration FederatedLogsSetup#duration}

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

The time unit for the retention duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#unit FederatedLogsSetup#unit}

---

### FederatedLogsSetupDefaultPartitionStorage <a name="FederatedLogsSetupDefaultPartitionStorage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

&federatedlogssetup.FederatedLogsSetupDefaultPartitionStorage {
	DataLocationUri: *string,
	Table: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.property.dataLocationUri">DataLocationUri</a></code> | <code>*string</code> | The URI location of the partition in object storage. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.property.table">Table</a></code> | <code>*string</code> | The table name associated with the default partition. |

---

##### `DataLocationUri`<sup>Required</sup> <a name="DataLocationUri" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.property.dataLocationUri"></a>

```go
DataLocationUri *string
```

- *Type:* *string

The URI location of the partition in object storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#data_location_uri FederatedLogsSetup#data_location_uri}

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.property.table"></a>

```go
Table *string
```

- *Type:* *string

The table name associated with the default partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#table FederatedLogsSetup#table}

---

### FederatedLogsSetupForwarder <a name="FederatedLogsSetupForwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

&federatedlogssetup.FederatedLogsSetupForwarder {
	Type: *string,
	PipelineControl: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.property.type">Type</a></code> | <code>*string</code> | The type of forwarder. Currently only PIPELINE_CONTROL is supported. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.property.pipelineControl">PipelineControl</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a></code> | pipeline_control block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of forwarder. Currently only PIPELINE_CONTROL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#type FederatedLogsSetup#type}

---

##### `PipelineControl`<sup>Optional</sup> <a name="PipelineControl" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.property.pipelineControl"></a>

```go
PipelineControl FederatedLogsSetupForwarderPipelineControl
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a>

pipeline_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#pipeline_control FederatedLogsSetup#pipeline_control}

---

### FederatedLogsSetupForwarderPipelineControl <a name="FederatedLogsSetupForwarderPipelineControl" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

&federatedlogssetup.FederatedLogsSetupForwarderPipelineControl {
	FleetId: *string,
	RoutingRule: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.property.fleetId">FleetId</a></code> | <code>*string</code> | The fleet entity GUID used for deploying the pipeline configuration. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.property.routingRule">RoutingRule</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a></code> | routing_rule block. |

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.property.fleetId"></a>

```go
FleetId *string
```

- *Type:* *string

The fleet entity GUID used for deploying the pipeline configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#fleet_id FederatedLogsSetup#fleet_id}

---

##### `RoutingRule`<sup>Optional</sup> <a name="RoutingRule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.property.routingRule"></a>

```go
RoutingRule FederatedLogsSetupForwarderPipelineControlRoutingRule
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a>

routing_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#routing_rule FederatedLogsSetup#routing_rule}

---

### FederatedLogsSetupForwarderPipelineControlRoutingRule <a name="FederatedLogsSetupForwarderPipelineControlRoutingRule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

&federatedlogssetup.FederatedLogsSetupForwarderPipelineControlRoutingRule {
	Expression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule.property.expression">Expression</a></code> | <code>*string</code> | OTTL expression for routing logs to this setup. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

OTTL expression for routing logs to this setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#expression FederatedLogsSetup#expression}

---

### FederatedLogsSetupHealthCheck <a name="FederatedLogsSetupHealthCheck" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheck.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

&federatedlogssetup.FederatedLogsSetupHealthCheck {

}
```


### FederatedLogsSetupHealthCheckEnd2EndDataFlow <a name="FederatedLogsSetupHealthCheckEnd2EndDataFlow" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

&federatedlogssetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow {

}
```


### FederatedLogsSetupHealthCheckQueryConnection <a name="FederatedLogsSetupHealthCheckQueryConnection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

&federatedlogssetup.FederatedLogsSetupHealthCheckQueryConnection {

}
```


### FederatedLogsSetupLifecycleStatus <a name="FederatedLogsSetupLifecycleStatus" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

&federatedlogssetup.FederatedLogsSetupLifecycleStatus {

}
```


### FederatedLogsSetupStorage <a name="FederatedLogsSetupStorage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

&federatedlogssetup.FederatedLogsSetupStorage {
	CloudProviderConfiguration: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration,
	Database: *string,
	DataIngestConnectionId: *string,
	DataLocationBucket: *string,
	QueryConnectionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.cloudProviderConfiguration">CloudProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a></code> | cloud_provider_configuration block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.database">Database</a></code> | <code>*string</code> | The database name associated with the federated log setup. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.dataIngestConnectionId">DataIngestConnectionId</a></code> | <code>*string</code> | The connection manager entity GUID used for writing data. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.dataLocationBucket">DataLocationBucket</a></code> | <code>*string</code> | The object storage bucket where log data is stored. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.queryConnectionId">QueryConnectionId</a></code> | <code>*string</code> | The connection manager entity GUID used by query workers for reading data. |

---

##### `CloudProviderConfiguration`<sup>Required</sup> <a name="CloudProviderConfiguration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.cloudProviderConfiguration"></a>

```go
CloudProviderConfiguration FederatedLogsSetupStorageCloudProviderConfiguration
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a>

cloud_provider_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#cloud_provider_configuration FederatedLogsSetup#cloud_provider_configuration}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database name associated with the federated log setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#database FederatedLogsSetup#database}

---

##### `DataIngestConnectionId`<sup>Required</sup> <a name="DataIngestConnectionId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.dataIngestConnectionId"></a>

```go
DataIngestConnectionId *string
```

- *Type:* *string

The connection manager entity GUID used for writing data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#data_ingest_connection_id FederatedLogsSetup#data_ingest_connection_id}

---

##### `DataLocationBucket`<sup>Required</sup> <a name="DataLocationBucket" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.dataLocationBucket"></a>

```go
DataLocationBucket *string
```

- *Type:* *string

The object storage bucket where log data is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#data_location_bucket FederatedLogsSetup#data_location_bucket}

---

##### `QueryConnectionId`<sup>Required</sup> <a name="QueryConnectionId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.queryConnectionId"></a>

```go
QueryConnectionId *string
```

- *Type:* *string

The connection manager entity GUID used by query workers for reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#query_connection_id FederatedLogsSetup#query_connection_id}

---

### FederatedLogsSetupStorageCloudProviderConfiguration <a name="FederatedLogsSetupStorageCloudProviderConfiguration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

&federatedlogssetup.FederatedLogsSetupStorageCloudProviderConfiguration {
	Provider: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.property.provider">Provider</a></code> | <code>*string</code> | The cloud provider. Currently only AWS is supported. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.property.region">Region</a></code> | <code>*string</code> | The cloud provider region. |

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.property.provider"></a>

```go
Provider *string
```

- *Type:* *string

The cloud provider. Currently only AWS is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#provider FederatedLogsSetup#provider}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.property.region"></a>

```go
Region *string
```

- *Type:* *string

The cloud provider region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/federated_logs_setup#region FederatedLogsSetup#region}

---

## Classes <a name="Classes" id="Classes"></a>

### FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference <a name="FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

federatedlogssetup.NewFederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.durationInput">DurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.duration">Duration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.durationInput"></a>

```go
func DurationInput() *f64
```

- *Type:* *f64

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.duration"></a>

```go
func Duration() *f64
```

- *Type:* *f64

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedLogsSetupDefaultPartitionDataRetentionPolicy
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a>

---


### FederatedLogsSetupDefaultPartitionOutputReference <a name="FederatedLogsSetupDefaultPartitionOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

federatedlogssetup.NewFederatedLogsSetupDefaultPartitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FederatedLogsSetupDefaultPartitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataRetentionPolicy` <a name="PutDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putDataRetentionPolicy"></a>

```go
func PutDataRetentionPolicy(value FederatedLogsSetupDefaultPartitionDataRetentionPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putDataRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a>

---

##### `PutStorage` <a name="PutStorage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putStorage"></a>

```go
func PutStorage(value FederatedLogsSetupDefaultPartitionStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a>

---

##### `ResetDataRetentionPolicy` <a name="ResetDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resetDataRetentionPolicy"></a>

```go
func ResetDataRetentionPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.dataRetentionPolicy">DataRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference">FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference">FederatedLogsSetupDefaultPartitionStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.dataRetentionPolicyInput">DataRetentionPolicyInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.storageInput">StorageInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataRetentionPolicy`<sup>Required</sup> <a name="DataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.dataRetentionPolicy"></a>

```go
func DataRetentionPolicy() FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference">FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.storage"></a>

```go
func Storage() FederatedLogsSetupDefaultPartitionStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference">FederatedLogsSetupDefaultPartitionStorageOutputReference</a>

---

##### `DataRetentionPolicyInput`<sup>Optional</sup> <a name="DataRetentionPolicyInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.dataRetentionPolicyInput"></a>

```go
func DataRetentionPolicyInput() FederatedLogsSetupDefaultPartitionDataRetentionPolicy
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a>

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.storageInput"></a>

```go
func StorageInput() FederatedLogsSetupDefaultPartitionStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedLogsSetupDefaultPartition
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a>

---


### FederatedLogsSetupDefaultPartitionStorageOutputReference <a name="FederatedLogsSetupDefaultPartitionStorageOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

federatedlogssetup.NewFederatedLogsSetupDefaultPartitionStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FederatedLogsSetupDefaultPartitionStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.dataLocationUriInput">DataLocationUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.tableInput">TableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.dataLocationUri">DataLocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.table">Table</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataLocationUriInput`<sup>Optional</sup> <a name="DataLocationUriInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.dataLocationUriInput"></a>

```go
func DataLocationUriInput() *string
```

- *Type:* *string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.tableInput"></a>

```go
func TableInput() *string
```

- *Type:* *string

---

##### `DataLocationUri`<sup>Required</sup> <a name="DataLocationUri" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.dataLocationUri"></a>

```go
func DataLocationUri() *string
```

- *Type:* *string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.table"></a>

```go
func Table() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedLogsSetupDefaultPartitionStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a>

---


### FederatedLogsSetupForwarderOutputReference <a name="FederatedLogsSetupForwarderOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

federatedlogssetup.NewFederatedLogsSetupForwarderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FederatedLogsSetupForwarderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPipelineControl` <a name="PutPipelineControl" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.putPipelineControl"></a>

```go
func PutPipelineControl(value FederatedLogsSetupForwarderPipelineControl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.putPipelineControl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a>

---

##### `ResetPipelineControl` <a name="ResetPipelineControl" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resetPipelineControl"></a>

```go
func ResetPipelineControl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.pipelineControl">PipelineControl</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference">FederatedLogsSetupForwarderPipelineControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.pipelineControlInput">PipelineControlInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PipelineControl`<sup>Required</sup> <a name="PipelineControl" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.pipelineControl"></a>

```go
func PipelineControl() FederatedLogsSetupForwarderPipelineControlOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference">FederatedLogsSetupForwarderPipelineControlOutputReference</a>

---

##### `PipelineControlInput`<sup>Optional</sup> <a name="PipelineControlInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.pipelineControlInput"></a>

```go
func PipelineControlInput() FederatedLogsSetupForwarderPipelineControl
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedLogsSetupForwarder
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a>

---


### FederatedLogsSetupForwarderPipelineControlOutputReference <a name="FederatedLogsSetupForwarderPipelineControlOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

federatedlogssetup.NewFederatedLogsSetupForwarderPipelineControlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FederatedLogsSetupForwarderPipelineControlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRoutingRule` <a name="PutRoutingRule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.putRoutingRule"></a>

```go
func PutRoutingRule(value FederatedLogsSetupForwarderPipelineControlRoutingRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.putRoutingRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a>

---

##### `ResetRoutingRule` <a name="ResetRoutingRule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resetRoutingRule"></a>

```go
func ResetRoutingRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.routingRule">RoutingRule</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference">FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fleetIdInput">FleetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.routingRuleInput">RoutingRuleInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fleetId">FleetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoutingRule`<sup>Required</sup> <a name="RoutingRule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.routingRule"></a>

```go
func RoutingRule() FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference">FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference</a>

---

##### `FleetIdInput`<sup>Optional</sup> <a name="FleetIdInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fleetIdInput"></a>

```go
func FleetIdInput() *string
```

- *Type:* *string

---

##### `RoutingRuleInput`<sup>Optional</sup> <a name="RoutingRuleInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.routingRuleInput"></a>

```go
func RoutingRuleInput() FederatedLogsSetupForwarderPipelineControlRoutingRule
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a>

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fleetId"></a>

```go
func FleetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedLogsSetupForwarderPipelineControl
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a>

---


### FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference <a name="FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

federatedlogssetup.NewFederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedLogsSetupForwarderPipelineControlRoutingRule
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a>

---


### FederatedLogsSetupHealthCheckEnd2EndDataFlowList <a name="FederatedLogsSetupHealthCheckEnd2EndDataFlowList" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

federatedlogssetup.NewFederatedLogsSetupHealthCheckEnd2EndDataFlowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FederatedLogsSetupHealthCheckEnd2EndDataFlowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.get"></a>

```go
func Get(index *f64) FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference <a name="FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

federatedlogssetup.NewFederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow">FederatedLogsSetupHealthCheckEnd2EndDataFlow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedLogsSetupHealthCheckEnd2EndDataFlow
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow">FederatedLogsSetupHealthCheckEnd2EndDataFlow</a>

---


### FederatedLogsSetupHealthCheckList <a name="FederatedLogsSetupHealthCheckList" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

federatedlogssetup.NewFederatedLogsSetupHealthCheckList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FederatedLogsSetupHealthCheckList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.get"></a>

```go
func Get(index *f64) FederatedLogsSetupHealthCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FederatedLogsSetupHealthCheckOutputReference <a name="FederatedLogsSetupHealthCheckOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

federatedlogssetup.NewFederatedLogsSetupHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FederatedLogsSetupHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.end2EndDataFlow">End2EndDataFlow</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList">FederatedLogsSetupHealthCheckEnd2EndDataFlowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.queryConnection">QueryConnection</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList">FederatedLogsSetupHealthCheckQueryConnectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheck">FederatedLogsSetupHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `End2EndDataFlow`<sup>Required</sup> <a name="End2EndDataFlow" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.end2EndDataFlow"></a>

```go
func End2EndDataFlow() FederatedLogsSetupHealthCheckEnd2EndDataFlowList
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList">FederatedLogsSetupHealthCheckEnd2EndDataFlowList</a>

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `QueryConnection`<sup>Required</sup> <a name="QueryConnection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.queryConnection"></a>

```go
func QueryConnection() FederatedLogsSetupHealthCheckQueryConnectionList
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList">FederatedLogsSetupHealthCheckQueryConnectionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedLogsSetupHealthCheck
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheck">FederatedLogsSetupHealthCheck</a>

---


### FederatedLogsSetupHealthCheckQueryConnectionList <a name="FederatedLogsSetupHealthCheckQueryConnectionList" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

federatedlogssetup.NewFederatedLogsSetupHealthCheckQueryConnectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FederatedLogsSetupHealthCheckQueryConnectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.get"></a>

```go
func Get(index *f64) FederatedLogsSetupHealthCheckQueryConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FederatedLogsSetupHealthCheckQueryConnectionOutputReference <a name="FederatedLogsSetupHealthCheckQueryConnectionOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

federatedlogssetup.NewFederatedLogsSetupHealthCheckQueryConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FederatedLogsSetupHealthCheckQueryConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection">FederatedLogsSetupHealthCheckQueryConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedLogsSetupHealthCheckQueryConnection
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection">FederatedLogsSetupHealthCheckQueryConnection</a>

---


### FederatedLogsSetupLifecycleStatusList <a name="FederatedLogsSetupLifecycleStatusList" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

federatedlogssetup.NewFederatedLogsSetupLifecycleStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FederatedLogsSetupLifecycleStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.get"></a>

```go
func Get(index *f64) FederatedLogsSetupLifecycleStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FederatedLogsSetupLifecycleStatusOutputReference <a name="FederatedLogsSetupLifecycleStatusOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

federatedlogssetup.NewFederatedLogsSetupLifecycleStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FederatedLogsSetupLifecycleStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatus">FederatedLogsSetupLifecycleStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedLogsSetupLifecycleStatus
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatus">FederatedLogsSetupLifecycleStatus</a>

---


### FederatedLogsSetupStorageCloudProviderConfigurationOutputReference <a name="FederatedLogsSetupStorageCloudProviderConfigurationOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

federatedlogssetup.NewFederatedLogsSetupStorageCloudProviderConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FederatedLogsSetupStorageCloudProviderConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.providerInput">ProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.provider">Provider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.providerInput"></a>

```go
func ProviderInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.provider"></a>

```go
func Provider() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedLogsSetupStorageCloudProviderConfiguration
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a>

---


### FederatedLogsSetupStorageOutputReference <a name="FederatedLogsSetupStorageOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/federatedlogssetup"

federatedlogssetup.NewFederatedLogsSetupStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FederatedLogsSetupStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudProviderConfiguration` <a name="PutCloudProviderConfiguration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.putCloudProviderConfiguration"></a>

```go
func PutCloudProviderConfiguration(value FederatedLogsSetupStorageCloudProviderConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.putCloudProviderConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.cloudProviderConfiguration">CloudProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference">FederatedLogsSetupStorageCloudProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.cloudProviderConfigurationInput">CloudProviderConfigurationInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataIngestConnectionIdInput">DataIngestConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataLocationBucketInput">DataLocationBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.queryConnectionIdInput">QueryConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataIngestConnectionId">DataIngestConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataLocationBucket">DataLocationBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.queryConnectionId">QueryConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudProviderConfiguration`<sup>Required</sup> <a name="CloudProviderConfiguration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.cloudProviderConfiguration"></a>

```go
func CloudProviderConfiguration() FederatedLogsSetupStorageCloudProviderConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference">FederatedLogsSetupStorageCloudProviderConfigurationOutputReference</a>

---

##### `CloudProviderConfigurationInput`<sup>Optional</sup> <a name="CloudProviderConfigurationInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.cloudProviderConfigurationInput"></a>

```go
func CloudProviderConfigurationInput() FederatedLogsSetupStorageCloudProviderConfiguration
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `DataIngestConnectionIdInput`<sup>Optional</sup> <a name="DataIngestConnectionIdInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataIngestConnectionIdInput"></a>

```go
func DataIngestConnectionIdInput() *string
```

- *Type:* *string

---

##### `DataLocationBucketInput`<sup>Optional</sup> <a name="DataLocationBucketInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataLocationBucketInput"></a>

```go
func DataLocationBucketInput() *string
```

- *Type:* *string

---

##### `QueryConnectionIdInput`<sup>Optional</sup> <a name="QueryConnectionIdInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.queryConnectionIdInput"></a>

```go
func QueryConnectionIdInput() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `DataIngestConnectionId`<sup>Required</sup> <a name="DataIngestConnectionId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataIngestConnectionId"></a>

```go
func DataIngestConnectionId() *string
```

- *Type:* *string

---

##### `DataLocationBucket`<sup>Required</sup> <a name="DataLocationBucket" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataLocationBucket"></a>

```go
func DataLocationBucket() *string
```

- *Type:* *string

---

##### `QueryConnectionId`<sup>Required</sup> <a name="QueryConnectionId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.queryConnectionId"></a>

```go
func QueryConnectionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedLogsSetupStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a>

---



