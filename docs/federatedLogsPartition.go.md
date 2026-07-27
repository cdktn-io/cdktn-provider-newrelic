# `federatedLogsPartition` Submodule <a name="`federatedLogsPartition` Submodule" id="@cdktn/provider-newrelic.federatedLogsPartition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FederatedLogsPartition <a name="FederatedLogsPartition" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition newrelic_federated_logs_partition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

federatedlogspartition.NewFederatedLogsPartition(scope Construct, id *string, config FederatedLogsPartitionConfig) FederatedLogsPartition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig">FederatedLogsPartitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig">FederatedLogsPartitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putDataRetentionPolicy">PutDataRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putForwarderConfiguration">PutForwarderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetDataRetentionPolicy">ResetDataRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetForwarderConfiguration">ResetForwarderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataRetentionPolicy` <a name="PutDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putDataRetentionPolicy"></a>

```go
func PutDataRetentionPolicy(value FederatedLogsPartitionDataRetentionPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putDataRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a>

---

##### `PutForwarderConfiguration` <a name="PutForwarderConfiguration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putForwarderConfiguration"></a>

```go
func PutForwarderConfiguration(value FederatedLogsPartitionForwarderConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putForwarderConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a>

---

##### `PutStorage` <a name="PutStorage" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putStorage"></a>

```go
func PutStorage(value FederatedLogsPartitionStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetActive` <a name="ResetActive" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetActive"></a>

```go
func ResetActive()
```

##### `ResetDataRetentionPolicy` <a name="ResetDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetDataRetentionPolicy"></a>

```go
func ResetDataRetentionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetForwarderConfiguration` <a name="ResetForwarderConfiguration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetForwarderConfiguration"></a>

```go
func ResetForwarderConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FederatedLogsPartition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

federatedlogspartition.FederatedLogsPartition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

federatedlogspartition.FederatedLogsPartition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

federatedlogspartition.FederatedLogsPartition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

federatedlogspartition.FederatedLogsPartition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a FederatedLogsPartition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FederatedLogsPartition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FederatedLogsPartition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the FederatedLogsPartition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dataRetentionPolicy">DataRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference">FederatedLogsPartitionDataRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forwarderConfiguration">ForwarderConfiguration</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference">FederatedLogsPartitionForwarderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList">FederatedLogsPartitionHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.isDefault">IsDefault</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.lifecycleStatus">LifecycleStatus</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList">FederatedLogsPartitionLifecycleStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference">FederatedLogsPartitionStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.activeInput">ActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dataRetentionPolicyInput">DataRetentionPolicyInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forwarderConfigurationInput">ForwarderConfigurationInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.setupIdInput">SetupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.storageInput">StorageInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.active">Active</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.setupId">SetupId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DataRetentionPolicy`<sup>Required</sup> <a name="DataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dataRetentionPolicy"></a>

```go
func DataRetentionPolicy() FederatedLogsPartitionDataRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference">FederatedLogsPartitionDataRetentionPolicyOutputReference</a>

---

##### `ForwarderConfiguration`<sup>Required</sup> <a name="ForwarderConfiguration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forwarderConfiguration"></a>

```go
func ForwarderConfiguration() FederatedLogsPartitionForwarderConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference">FederatedLogsPartitionForwarderConfigurationOutputReference</a>

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.healthCheck"></a>

```go
func HealthCheck() FederatedLogsPartitionHealthCheckList
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList">FederatedLogsPartitionHealthCheckList</a>

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.isDefault"></a>

```go
func IsDefault() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LifecycleStatus`<sup>Required</sup> <a name="LifecycleStatus" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.lifecycleStatus"></a>

```go
func LifecycleStatus() FederatedLogsPartitionLifecycleStatusList
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList">FederatedLogsPartitionLifecycleStatusList</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.storage"></a>

```go
func Storage() FederatedLogsPartitionStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference">FederatedLogsPartitionStorageOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.activeInput"></a>

```go
func ActiveInput() interface{}
```

- *Type:* interface{}

---

##### `DataRetentionPolicyInput`<sup>Optional</sup> <a name="DataRetentionPolicyInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dataRetentionPolicyInput"></a>

```go
func DataRetentionPolicyInput() FederatedLogsPartitionDataRetentionPolicy
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ForwarderConfigurationInput`<sup>Optional</sup> <a name="ForwarderConfigurationInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forwarderConfigurationInput"></a>

```go
func ForwarderConfigurationInput() FederatedLogsPartitionForwarderConfiguration
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SetupIdInput`<sup>Optional</sup> <a name="SetupIdInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.setupIdInput"></a>

```go
func SetupIdInput() *string
```

- *Type:* *string

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.storageInput"></a>

```go
func StorageInput() FederatedLogsPartitionStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.active"></a>

```go
func Active() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SetupId`<sup>Required</sup> <a name="SetupId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.setupId"></a>

```go
func SetupId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FederatedLogsPartitionConfig <a name="FederatedLogsPartitionConfig" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

&federatedlogspartition.FederatedLogsPartitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	SetupId: *string,
	Storage: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15.federatedLogsPartition.FederatedLogsPartitionStorage,
	AccountId: *f64,
	Active: interface{},
	DataRetentionPolicy: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy,
	Description: *string,
	ForwarderConfiguration: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.name">Name</a></code> | <code>*string</code> | The name of the partition. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.setupId">SetupId</a></code> | <code>*string</code> | The ID of the federated log setup this partition belongs to. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | The New Relic account ID where the federated logs partition will live. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.active">Active</a></code> | <code>interface{}</code> | Whether the partition is active. When false, log routing to this partition is turned off. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.dataRetentionPolicy">DataRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a></code> | data_retention_policy block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.description">Description</a></code> | <code>*string</code> | The description of the partition. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.forwarderConfiguration">ForwarderConfiguration</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a></code> | forwarder_configuration block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#id FederatedLogsPartition#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#name FederatedLogsPartition#name}

---

##### `SetupId`<sup>Required</sup> <a name="SetupId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.setupId"></a>

```go
SetupId *string
```

- *Type:* *string

The ID of the federated log setup this partition belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#setup_id FederatedLogsPartition#setup_id}

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.storage"></a>

```go
Storage FederatedLogsPartitionStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#storage FederatedLogsPartition#storage}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The New Relic account ID where the federated logs partition will live.

Defaults to the provider's account_id. Changing this after creation is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#account_id FederatedLogsPartition#account_id}

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.active"></a>

```go
Active interface{}
```

- *Type:* interface{}

Whether the partition is active. When false, log routing to this partition is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#active FederatedLogsPartition#active}

---

##### `DataRetentionPolicy`<sup>Optional</sup> <a name="DataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.dataRetentionPolicy"></a>

```go
DataRetentionPolicy FederatedLogsPartitionDataRetentionPolicy
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a>

data_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#data_retention_policy FederatedLogsPartition#data_retention_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#description FederatedLogsPartition#description}

---

##### `ForwarderConfiguration`<sup>Optional</sup> <a name="ForwarderConfiguration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.forwarderConfiguration"></a>

```go
ForwarderConfiguration FederatedLogsPartitionForwarderConfiguration
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a>

forwarder_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#forwarder_configuration FederatedLogsPartition#forwarder_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#id FederatedLogsPartition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### FederatedLogsPartitionDataRetentionPolicy <a name="FederatedLogsPartitionDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

&federatedlogspartition.FederatedLogsPartitionDataRetentionPolicy {
	Duration: *f64,
	Unit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy.property.duration">Duration</a></code> | <code>*f64</code> | The duration value for retention. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy.property.unit">Unit</a></code> | <code>*string</code> | The time unit for the retention duration. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy.property.duration"></a>

```go
Duration *f64
```

- *Type:* *f64

The duration value for retention.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#duration FederatedLogsPartition#duration}

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

The time unit for the retention duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#unit FederatedLogsPartition#unit}

---

### FederatedLogsPartitionForwarderConfiguration <a name="FederatedLogsPartitionForwarderConfiguration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

&federatedlogspartition.FederatedLogsPartitionForwarderConfiguration {
	Type: *string,
	PipelineControl: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration.property.type">Type</a></code> | <code>*string</code> | The type of forwarder. Must match the parent setup's forwarder type. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration.property.pipelineControl">PipelineControl</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a></code> | pipeline_control block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of forwarder. Must match the parent setup's forwarder type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#type FederatedLogsPartition#type}

---

##### `PipelineControl`<sup>Optional</sup> <a name="PipelineControl" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration.property.pipelineControl"></a>

```go
PipelineControl FederatedLogsPartitionForwarderConfigurationPipelineControl
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a>

pipeline_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#pipeline_control FederatedLogsPartition#pipeline_control}

---

### FederatedLogsPartitionForwarderConfigurationPipelineControl <a name="FederatedLogsPartitionForwarderConfigurationPipelineControl" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

&federatedlogspartition.FederatedLogsPartitionForwarderConfigurationPipelineControl {
	PartitionRule: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl.property.partitionRule">PartitionRule</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a></code> | partition_rule block. |

---

##### `PartitionRule`<sup>Optional</sup> <a name="PartitionRule" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl.property.partitionRule"></a>

```go
PartitionRule FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a>

partition_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#partition_rule FederatedLogsPartition#partition_rule}

---

### FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule <a name="FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

&federatedlogspartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule {
	Expression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule.property.expression">Expression</a></code> | <code>*string</code> | OTTL expression for routing logs to this partition. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

OTTL expression for routing logs to this partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#expression FederatedLogsPartition#expression}

---

### FederatedLogsPartitionHealthCheck <a name="FederatedLogsPartitionHealthCheck" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheck.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

&federatedlogspartition.FederatedLogsPartitionHealthCheck {

}
```


### FederatedLogsPartitionHealthCheckEnd2EndDataFlow <a name="FederatedLogsPartitionHealthCheckEnd2EndDataFlow" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

&federatedlogspartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlow {

}
```


### FederatedLogsPartitionHealthCheckQueryConnection <a name="FederatedLogsPartitionHealthCheckQueryConnection" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

&federatedlogspartition.FederatedLogsPartitionHealthCheckQueryConnection {

}
```


### FederatedLogsPartitionLifecycleStatus <a name="FederatedLogsPartitionLifecycleStatus" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

&federatedlogspartition.FederatedLogsPartitionLifecycleStatus {

}
```


### FederatedLogsPartitionStorage <a name="FederatedLogsPartitionStorage" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

&federatedlogspartition.FederatedLogsPartitionStorage {
	DataLocationUri: *string,
	Table: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage.property.dataLocationUri">DataLocationUri</a></code> | <code>*string</code> | The URI location of the partition in object storage. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage.property.table">Table</a></code> | <code>*string</code> | The table name associated with the partition. |

---

##### `DataLocationUri`<sup>Required</sup> <a name="DataLocationUri" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage.property.dataLocationUri"></a>

```go
DataLocationUri *string
```

- *Type:* *string

The URI location of the partition in object storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#data_location_uri FederatedLogsPartition#data_location_uri}

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage.property.table"></a>

```go
Table *string
```

- *Type:* *string

The table name associated with the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.95.2/docs/resources/federated_logs_partition#table FederatedLogsPartition#table}

---

## Classes <a name="Classes" id="Classes"></a>

### FederatedLogsPartitionDataRetentionPolicyOutputReference <a name="FederatedLogsPartitionDataRetentionPolicyOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

federatedlogspartition.NewFederatedLogsPartitionDataRetentionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FederatedLogsPartitionDataRetentionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.durationInput">DurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.duration">Duration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.durationInput"></a>

```go
func DurationInput() *f64
```

- *Type:* *f64

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.duration"></a>

```go
func Duration() *f64
```

- *Type:* *f64

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedLogsPartitionDataRetentionPolicy
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a>

---


### FederatedLogsPartitionForwarderConfigurationOutputReference <a name="FederatedLogsPartitionForwarderConfigurationOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

federatedlogspartition.NewFederatedLogsPartitionForwarderConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FederatedLogsPartitionForwarderConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.putPipelineControl">PutPipelineControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.resetPipelineControl">ResetPipelineControl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPipelineControl` <a name="PutPipelineControl" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.putPipelineControl"></a>

```go
func PutPipelineControl(value FederatedLogsPartitionForwarderConfigurationPipelineControl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.putPipelineControl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a>

---

##### `ResetPipelineControl` <a name="ResetPipelineControl" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.resetPipelineControl"></a>

```go
func ResetPipelineControl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.pipelineControl">PipelineControl</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference">FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.pipelineControlInput">PipelineControlInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PipelineControl`<sup>Required</sup> <a name="PipelineControl" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.pipelineControl"></a>

```go
func PipelineControl() FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference">FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference</a>

---

##### `PipelineControlInput`<sup>Optional</sup> <a name="PipelineControlInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.pipelineControlInput"></a>

```go
func PipelineControlInput() FederatedLogsPartitionForwarderConfigurationPipelineControl
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedLogsPartitionForwarderConfiguration
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a>

---


### FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference <a name="FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

federatedlogspartition.NewFederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.putPartitionRule">PutPartitionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.resetPartitionRule">ResetPartitionRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPartitionRule` <a name="PutPartitionRule" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.putPartitionRule"></a>

```go
func PutPartitionRule(value FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.putPartitionRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a>

---

##### `ResetPartitionRule` <a name="ResetPartitionRule" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.resetPartitionRule"></a>

```go
func ResetPartitionRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.partitionRule">PartitionRule</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.partitionRuleInput">PartitionRuleInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PartitionRule`<sup>Required</sup> <a name="PartitionRule" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.partitionRule"></a>

```go
func PartitionRule() FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference</a>

---

##### `PartitionRuleInput`<sup>Optional</sup> <a name="PartitionRuleInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.partitionRuleInput"></a>

```go
func PartitionRuleInput() FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedLogsPartitionForwarderConfigurationPipelineControl
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a>

---


### FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference <a name="FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

federatedlogspartition.NewFederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a>

---


### FederatedLogsPartitionHealthCheckEnd2EndDataFlowList <a name="FederatedLogsPartitionHealthCheckEnd2EndDataFlowList" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

federatedlogspartition.NewFederatedLogsPartitionHealthCheckEnd2EndDataFlowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FederatedLogsPartitionHealthCheckEnd2EndDataFlowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.get"></a>

```go
func Get(index *f64) FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference <a name="FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

federatedlogspartition.NewFederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlow">FederatedLogsPartitionHealthCheckEnd2EndDataFlow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedLogsPartitionHealthCheckEnd2EndDataFlow
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlow">FederatedLogsPartitionHealthCheckEnd2EndDataFlow</a>

---


### FederatedLogsPartitionHealthCheckList <a name="FederatedLogsPartitionHealthCheckList" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

federatedlogspartition.NewFederatedLogsPartitionHealthCheckList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FederatedLogsPartitionHealthCheckList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.get"></a>

```go
func Get(index *f64) FederatedLogsPartitionHealthCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FederatedLogsPartitionHealthCheckOutputReference <a name="FederatedLogsPartitionHealthCheckOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

federatedlogspartition.NewFederatedLogsPartitionHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FederatedLogsPartitionHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.end2EndDataFlow">End2EndDataFlow</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList">FederatedLogsPartitionHealthCheckEnd2EndDataFlowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.queryConnection">QueryConnection</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList">FederatedLogsPartitionHealthCheckQueryConnectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheck">FederatedLogsPartitionHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `End2EndDataFlow`<sup>Required</sup> <a name="End2EndDataFlow" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.end2EndDataFlow"></a>

```go
func End2EndDataFlow() FederatedLogsPartitionHealthCheckEnd2EndDataFlowList
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList">FederatedLogsPartitionHealthCheckEnd2EndDataFlowList</a>

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `QueryConnection`<sup>Required</sup> <a name="QueryConnection" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.queryConnection"></a>

```go
func QueryConnection() FederatedLogsPartitionHealthCheckQueryConnectionList
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList">FederatedLogsPartitionHealthCheckQueryConnectionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedLogsPartitionHealthCheck
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheck">FederatedLogsPartitionHealthCheck</a>

---


### FederatedLogsPartitionHealthCheckQueryConnectionList <a name="FederatedLogsPartitionHealthCheckQueryConnectionList" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

federatedlogspartition.NewFederatedLogsPartitionHealthCheckQueryConnectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FederatedLogsPartitionHealthCheckQueryConnectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.get"></a>

```go
func Get(index *f64) FederatedLogsPartitionHealthCheckQueryConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FederatedLogsPartitionHealthCheckQueryConnectionOutputReference <a name="FederatedLogsPartitionHealthCheckQueryConnectionOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

federatedlogspartition.NewFederatedLogsPartitionHealthCheckQueryConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FederatedLogsPartitionHealthCheckQueryConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnection">FederatedLogsPartitionHealthCheckQueryConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedLogsPartitionHealthCheckQueryConnection
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnection">FederatedLogsPartitionHealthCheckQueryConnection</a>

---


### FederatedLogsPartitionLifecycleStatusList <a name="FederatedLogsPartitionLifecycleStatusList" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

federatedlogspartition.NewFederatedLogsPartitionLifecycleStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FederatedLogsPartitionLifecycleStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.get"></a>

```go
func Get(index *f64) FederatedLogsPartitionLifecycleStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FederatedLogsPartitionLifecycleStatusOutputReference <a name="FederatedLogsPartitionLifecycleStatusOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

federatedlogspartition.NewFederatedLogsPartitionLifecycleStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FederatedLogsPartitionLifecycleStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatus">FederatedLogsPartitionLifecycleStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedLogsPartitionLifecycleStatus
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatus">FederatedLogsPartitionLifecycleStatus</a>

---


### FederatedLogsPartitionStorageOutputReference <a name="FederatedLogsPartitionStorageOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/federatedlogspartition"

federatedlogspartition.NewFederatedLogsPartitionStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FederatedLogsPartitionStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.dataLocationUriInput">DataLocationUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.tableInput">TableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.dataLocationUri">DataLocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.table">Table</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataLocationUriInput`<sup>Optional</sup> <a name="DataLocationUriInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.dataLocationUriInput"></a>

```go
func DataLocationUriInput() *string
```

- *Type:* *string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.tableInput"></a>

```go
func TableInput() *string
```

- *Type:* *string

---

##### `DataLocationUri`<sup>Required</sup> <a name="DataLocationUri" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.dataLocationUri"></a>

```go
func DataLocationUri() *string
```

- *Type:* *string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.table"></a>

```go
func Table() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() FederatedLogsPartitionStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a>

---



