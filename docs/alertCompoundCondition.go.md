# `alertCompoundCondition` Submodule <a name="`alertCompoundCondition` Submodule" id="@cdktn/provider-newrelic.alertCompoundCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertCompoundCondition <a name="AlertCompoundCondition" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/alert_compound_condition newrelic_alert_compound_condition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/alertcompoundcondition"

alertcompoundcondition.NewAlertCompoundCondition(scope Construct, id *string, config AlertCompoundConditionConfig) AlertCompoundCondition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig">AlertCompoundConditionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig">AlertCompoundConditionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putComponentConditions">PutComponentConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetFacetMatchingBehavior">ResetFacetMatchingBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetRunbookUrl">ResetRunbookUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetThresholdDuration">ResetThresholdDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComponentConditions` <a name="PutComponentConditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putComponentConditions"></a>

```go
func PutComponentConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putComponentConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putTimeouts"></a>

```go
func PutTimeouts(value AlertCompoundConditionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetFacetMatchingBehavior` <a name="ResetFacetMatchingBehavior" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetFacetMatchingBehavior"></a>

```go
func ResetFacetMatchingBehavior()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetId"></a>

```go
func ResetId()
```

##### `ResetRunbookUrl` <a name="ResetRunbookUrl" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetRunbookUrl"></a>

```go
func ResetRunbookUrl()
```

##### `ResetThresholdDuration` <a name="ResetThresholdDuration" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetThresholdDuration"></a>

```go
func ResetThresholdDuration()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AlertCompoundCondition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/alertcompoundcondition"

alertcompoundcondition.AlertCompoundCondition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/alertcompoundcondition"

alertcompoundcondition.AlertCompoundCondition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/alertcompoundcondition"

alertcompoundcondition.AlertCompoundCondition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/alertcompoundcondition"

alertcompoundcondition.AlertCompoundCondition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AlertCompoundCondition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AlertCompoundCondition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AlertCompoundCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/alert_compound_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AlertCompoundCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.componentConditions">ComponentConditions</a></code> | <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList">AlertCompoundConditionComponentConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference">AlertCompoundConditionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.componentConditionsInput">ComponentConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.facetMatchingBehaviorInput">FacetMatchingBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.policyIdInput">PolicyIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.runbookUrlInput">RunbookUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.thresholdDurationInput">ThresholdDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.triggerExpressionInput">TriggerExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.facetMatchingBehavior">FacetMatchingBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.policyId">PolicyId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.runbookUrl">RunbookUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.thresholdDuration">ThresholdDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.triggerExpression">TriggerExpression</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComponentConditions`<sup>Required</sup> <a name="ComponentConditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.componentConditions"></a>

```go
func ComponentConditions() AlertCompoundConditionComponentConditionsList
```

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList">AlertCompoundConditionComponentConditionsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.timeouts"></a>

```go
func Timeouts() AlertCompoundConditionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference">AlertCompoundConditionTimeoutsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `ComponentConditionsInput`<sup>Optional</sup> <a name="ComponentConditionsInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.componentConditionsInput"></a>

```go
func ComponentConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FacetMatchingBehaviorInput`<sup>Optional</sup> <a name="FacetMatchingBehaviorInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.facetMatchingBehaviorInput"></a>

```go
func FacetMatchingBehaviorInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.policyIdInput"></a>

```go
func PolicyIdInput() *f64
```

- *Type:* *f64

---

##### `RunbookUrlInput`<sup>Optional</sup> <a name="RunbookUrlInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.runbookUrlInput"></a>

```go
func RunbookUrlInput() *string
```

- *Type:* *string

---

##### `ThresholdDurationInput`<sup>Optional</sup> <a name="ThresholdDurationInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.thresholdDurationInput"></a>

```go
func ThresholdDurationInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TriggerExpressionInput`<sup>Optional</sup> <a name="TriggerExpressionInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.triggerExpressionInput"></a>

```go
func TriggerExpressionInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `FacetMatchingBehavior`<sup>Required</sup> <a name="FacetMatchingBehavior" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.facetMatchingBehavior"></a>

```go
func FacetMatchingBehavior() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.policyId"></a>

```go
func PolicyId() *f64
```

- *Type:* *f64

---

##### `RunbookUrl`<sup>Required</sup> <a name="RunbookUrl" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.runbookUrl"></a>

```go
func RunbookUrl() *string
```

- *Type:* *string

---

##### `ThresholdDuration`<sup>Required</sup> <a name="ThresholdDuration" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.thresholdDuration"></a>

```go
func ThresholdDuration() *f64
```

- *Type:* *f64

---

##### `TriggerExpression`<sup>Required</sup> <a name="TriggerExpression" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.triggerExpression"></a>

```go
func TriggerExpression() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundCondition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertCompoundConditionComponentConditions <a name="AlertCompoundConditionComponentConditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/alertcompoundcondition"

&alertcompoundcondition.AlertCompoundConditionComponentConditions {
	Alias: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.property.alias">Alias</a></code> | <code>*string</code> | The identifier that will be used in the compound alert condition's trigger_expression (e.g., 'A', 'B', 'C'). |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.property.id">Id</a></code> | <code>*string</code> | The ID of the existing alert condition to use as a component. |

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

The identifier that will be used in the compound alert condition's trigger_expression (e.g., 'A', 'B', 'C').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/alert_compound_condition#alias AlertCompoundCondition#alias}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditions.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the existing alert condition to use as a component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/alert_compound_condition#id AlertCompoundCondition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AlertCompoundConditionConfig <a name="AlertCompoundConditionConfig" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/alertcompoundcondition"

&alertcompoundcondition.AlertCompoundConditionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ComponentConditions: interface{},
	Enabled: interface{},
	Name: *string,
	PolicyId: *f64,
	TriggerExpression: *string,
	AccountId: *f64,
	FacetMatchingBehavior: *string,
	Id: *string,
	RunbookUrl: *string,
	ThresholdDuration: *f64,
	Timeouts: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14.alertCompoundCondition.AlertCompoundConditionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.componentConditions">ComponentConditions</a></code> | <code>interface{}</code> | component_conditions block. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether or not to enable the alert condition. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.name">Name</a></code> | <code>*string</code> | The title of the compound alert condition. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.policyId">PolicyId</a></code> | <code>*f64</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.triggerExpression">TriggerExpression</a></code> | <code>*string</code> | Expression that defines how component condition evaluations are combined. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | The New Relic account ID for managing your compound alert conditions. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.facetMatchingBehavior">FacetMatchingBehavior</a></code> | <code>*string</code> | How the compound condition will take into account the component conditions' facets during evaluation. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/alert_compound_condition#id AlertCompoundCondition#id}. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.runbookUrl">RunbookUrl</a></code> | <code>*string</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.thresholdDuration">ThresholdDuration</a></code> | <code>*f64</code> | The duration, in seconds, that the trigger expression must be true before the compound alert condition will activate. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComponentConditions`<sup>Required</sup> <a name="ComponentConditions" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.componentConditions"></a>

```go
ComponentConditions interface{}
```

- *Type:* interface{}

component_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/alert_compound_condition#component_conditions AlertCompoundCondition#component_conditions}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether or not to enable the alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/alert_compound_condition#enabled AlertCompoundCondition#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The title of the compound alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/alert_compound_condition#name AlertCompoundCondition#name}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.policyId"></a>

```go
PolicyId *f64
```

- *Type:* *f64

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/alert_compound_condition#policy_id AlertCompoundCondition#policy_id}

---

##### `TriggerExpression`<sup>Required</sup> <a name="TriggerExpression" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.triggerExpression"></a>

```go
TriggerExpression *string
```

- *Type:* *string

Expression that defines how component condition evaluations are combined.

Valid operators are 'AND', 'OR', 'NOT'. For more complex expressions, use parentheses. Simple example: 'A AND B'. Complex example: 'A AND (B OR C) AND NOT D'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/alert_compound_condition#trigger_expression AlertCompoundCondition#trigger_expression}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The New Relic account ID for managing your compound alert conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/alert_compound_condition#account_id AlertCompoundCondition#account_id}

---

##### `FacetMatchingBehavior`<sup>Optional</sup> <a name="FacetMatchingBehavior" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.facetMatchingBehavior"></a>

```go
FacetMatchingBehavior *string
```

- *Type:* *string

How the compound condition will take into account the component conditions' facets during evaluation.

Valid values: 'FACETS_IGNORED' (default) - facets are not taken into consideration when determining when the compound alert condition activates; 'FACETS_MATCH' - the compound alert condition will activate only when shared facets have matching values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/alert_compound_condition#facet_matching_behavior AlertCompoundCondition#facet_matching_behavior}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/alert_compound_condition#id AlertCompoundCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RunbookUrl`<sup>Optional</sup> <a name="RunbookUrl" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.runbookUrl"></a>

```go
RunbookUrl *string
```

- *Type:* *string

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/alert_compound_condition#runbook_url AlertCompoundCondition#runbook_url}

---

##### `ThresholdDuration`<sup>Optional</sup> <a name="ThresholdDuration" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.thresholdDuration"></a>

```go
ThresholdDuration *f64
```

- *Type:* *f64

The duration, in seconds, that the trigger expression must be true before the compound alert condition will activate.

Between 30-86400 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/alert_compound_condition#threshold_duration AlertCompoundCondition#threshold_duration}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionConfig.property.timeouts"></a>

```go
Timeouts AlertCompoundConditionTimeouts
```

- *Type:* <a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts">AlertCompoundConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/alert_compound_condition#timeouts AlertCompoundCondition#timeouts}

---

### AlertCompoundConditionTimeouts <a name="AlertCompoundConditionTimeouts" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/alertcompoundcondition"

&alertcompoundcondition.AlertCompoundConditionTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/alert_compound_condition#create AlertCompoundCondition#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/alert_compound_condition#create AlertCompoundCondition#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlertCompoundConditionComponentConditionsList <a name="AlertCompoundConditionComponentConditionsList" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/alertcompoundcondition"

alertcompoundcondition.NewAlertCompoundConditionComponentConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AlertCompoundConditionComponentConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.get"></a>

```go
func Get(index *f64) AlertCompoundConditionComponentConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlertCompoundConditionComponentConditionsOutputReference <a name="AlertCompoundConditionComponentConditionsOutputReference" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/alertcompoundcondition"

alertcompoundcondition.NewAlertCompoundConditionComponentConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AlertCompoundConditionComponentConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionComponentConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlertCompoundConditionTimeoutsOutputReference <a name="AlertCompoundConditionTimeoutsOutputReference" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/alertcompoundcondition"

alertcompoundcondition.NewAlertCompoundConditionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlertCompoundConditionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.alertCompoundCondition.AlertCompoundConditionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



