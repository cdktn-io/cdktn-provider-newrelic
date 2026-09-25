# `pathpointFlow` Submodule <a name="`pathpointFlow` Submodule" id="@cdktn/provider-newrelic.pathpointFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PathpointFlow <a name="PathpointFlow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow newrelic_pathpoint_flow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlow(scope Construct, id *string, config PathpointFlowConfig) PathpointFlow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig">PathpointFlowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig">PathpointFlowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putKpis">PutKpis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putStages">PutStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetHealthRollup">ResetHealthRollup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetKpis">ResetKpis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetRefreshInterval">ResetRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetStages">ResetStages</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKpis` <a name="PutKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putKpis"></a>

```go
func PutKpis(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putKpis.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStages` <a name="PutStages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putStages"></a>

```go
func PutStages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.putStages.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetCategory` <a name="ResetCategory" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetCategory"></a>

```go
func ResetCategory()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHealthRollup` <a name="ResetHealthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetHealthRollup"></a>

```go
func ResetHealthRollup()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetId"></a>

```go
func ResetId()
```

##### `ResetKpis` <a name="ResetKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetKpis"></a>

```go
func ResetKpis()
```

##### `ResetRefreshInterval` <a name="ResetRefreshInterval" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetRefreshInterval"></a>

```go
func ResetRefreshInterval()
```

##### `ResetStages` <a name="ResetStages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.resetStages"></a>

```go
func ResetStages()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PathpointFlow resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.PathpointFlow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.PathpointFlow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.PathpointFlow_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.PathpointFlow_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PathpointFlow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PathpointFlow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PathpointFlow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PathpointFlow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.guid">Guid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.kpis">Kpis</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList">PathpointFlowKpisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.stages">Stages</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList">PathpointFlowStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.healthRollupInput">HealthRollupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.kpisInput">KpisInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.refreshIntervalInput">RefreshIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.stagesInput">StagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.healthRollup">HealthRollup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.refreshInterval">RefreshInterval</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.guid"></a>

```go
func Guid() *string
```

- *Type:* *string

---

##### `Kpis`<sup>Required</sup> <a name="Kpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.kpis"></a>

```go
func Kpis() PathpointFlowKpisList
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList">PathpointFlowKpisList</a>

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.stages"></a>

```go
func Stages() PathpointFlowStagesList
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList">PathpointFlowStagesList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HealthRollupInput`<sup>Optional</sup> <a name="HealthRollupInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.healthRollupInput"></a>

```go
func HealthRollupInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KpisInput`<sup>Optional</sup> <a name="KpisInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.kpisInput"></a>

```go
func KpisInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RefreshIntervalInput`<sup>Optional</sup> <a name="RefreshIntervalInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.refreshIntervalInput"></a>

```go
func RefreshIntervalInput() *string
```

- *Type:* *string

---

##### `StagesInput`<sup>Optional</sup> <a name="StagesInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.stagesInput"></a>

```go
func StagesInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HealthRollup`<sup>Required</sup> <a name="HealthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.healthRollup"></a>

```go
func HealthRollup() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RefreshInterval`<sup>Required</sup> <a name="RefreshInterval" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.refreshInterval"></a>

```go
func RefreshInterval() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PathpointFlowConfig <a name="PathpointFlowConfig" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

&pathpointflow.PathpointFlowConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AccountId: *f64,
	Category: *string,
	Description: *string,
	HealthRollup: *string,
	Id: *string,
	Kpis: interface{},
	RefreshInterval: *string,
	Stages: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.name">Name</a></code> | <code>*string</code> | Display name of the Pathpoint flow. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | The New Relic account ID that owns this Pathpoint flow. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.category">Category</a></code> | <code>*string</code> | Optional category used to group flows (e.g. Marketing, Checkout). |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.description">Description</a></code> | <code>*string</code> | Optional description of the flow. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.healthRollup">HealthRollup</a></code> | <code>*string</code> | Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#id PathpointFlow#id}. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.kpis">Kpis</a></code> | <code>interface{}</code> | kpis block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.refreshInterval">RefreshInterval</a></code> | <code>*string</code> | How often health statuses refresh: ONE_MINUTE, FIVE_MINUTES, TEN_MINUTES, FIFTEEN_MINUTES, THIRTY_MINUTES. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.stages">Stages</a></code> | <code>interface{}</code> | stages block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Display name of the Pathpoint flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The New Relic account ID that owns this Pathpoint flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#account_id PathpointFlow#account_id}

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.category"></a>

```go
Category *string
```

- *Type:* *string

Optional category used to group flows (e.g. Marketing, Checkout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#category PathpointFlow#category}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional description of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#description PathpointFlow#description}

---

##### `HealthRollup`<sup>Optional</sup> <a name="HealthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.healthRollup"></a>

```go
HealthRollup *string
```

- *Type:* *string

Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#health_rollup PathpointFlow#health_rollup}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#id PathpointFlow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Kpis`<sup>Optional</sup> <a name="Kpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.kpis"></a>

```go
Kpis interface{}
```

- *Type:* interface{}

kpis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#kpis PathpointFlow#kpis}

---

##### `RefreshInterval`<sup>Optional</sup> <a name="RefreshInterval" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.refreshInterval"></a>

```go
RefreshInterval *string
```

- *Type:* *string

How often health statuses refresh: ONE_MINUTE, FIVE_MINUTES, TEN_MINUTES, FIFTEEN_MINUTES, THIRTY_MINUTES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#refresh_interval PathpointFlow#refresh_interval}

---

##### `Stages`<sup>Optional</sup> <a name="Stages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowConfig.property.stages"></a>

```go
Stages interface{}
```

- *Type:* interface{}

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#stages PathpointFlow#stages}

---

### PathpointFlowKpis <a name="PathpointFlowKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

&pathpointflow.PathpointFlowKpis {
	Name: *string,
	Query: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.pathpointFlow.PathpointFlowKpisQuery,
	AccountId: *f64,
	Category: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.name">Name</a></code> | <code>*string</code> | Display name of the KPI. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.query">Query</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a></code> | query block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.accountId">AccountId</a></code> | <code>*f64</code> | Account ID this KPI belongs to. Defaults to the flow's account_id. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.category">Category</a></code> | <code>*string</code> | Optional category to group KPIs. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.description">Description</a></code> | <code>*string</code> | Optional description. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.name"></a>

```go
Name *string
```

- *Type:* *string

Display name of the KPI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.query"></a>

```go
Query PathpointFlowKpisQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#query PathpointFlow#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

Account ID this KPI belongs to. Defaults to the flow's account_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#account_id PathpointFlow#account_id}

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.category"></a>

```go
Category *string
```

- *Type:* *string

Optional category to group KPIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#category PathpointFlow#category}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpis.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#description PathpointFlow#description}

---

### PathpointFlowKpisQuery <a name="PathpointFlowKpisQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

&pathpointflow.PathpointFlowKpisQuery {
	From: *string,
	Select: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.pathpointFlow.PathpointFlowKpisQuerySelect,
	TimeWindow: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.pathpointFlow.PathpointFlowKpisQueryTimeWindow,
	Where: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.from">From</a></code> | <code>*string</code> | Data source to query from (e.g., Transaction, Metric, Log). |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.select">Select</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a></code> | select block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.timeWindow">TimeWindow</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a></code> | time_window block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.where">Where</a></code> | <code>*string</code> | Optional WHERE clause to filter data. |

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.from"></a>

```go
From *string
```

- *Type:* *string

Data source to query from (e.g., Transaction, Metric, Log).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#from PathpointFlow#from}

---

##### `Select`<sup>Required</sup> <a name="Select" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.select"></a>

```go
Select PathpointFlowKpisQuerySelect
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#select PathpointFlow#select}

---

##### `TimeWindow`<sup>Optional</sup> <a name="TimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.timeWindow"></a>

```go
TimeWindow PathpointFlowKpisQueryTimeWindow
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a>

time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#time_window PathpointFlow#time_window}

---

##### `Where`<sup>Optional</sup> <a name="Where" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery.property.where"></a>

```go
Where *string
```

- *Type:* *string

Optional WHERE clause to filter data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#where PathpointFlow#where}

---

### PathpointFlowKpisQuerySelect <a name="PathpointFlowKpisQuerySelect" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

&pathpointflow.PathpointFlowKpisQuerySelect {
	AggregationType: *string,
	Alias: *string,
	Attribute: *string,
	Threshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.aggregationType">AggregationType</a></code> | <code>*string</code> | Aggregation function: AVERAGE, COUNT, HISTOGRAM, MAX, MIN, PERCENTILE, SUM, UNIQUE_COUNT. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.alias">Alias</a></code> | <code>*string</code> | Optional alias for the aggregated value. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.attribute">Attribute</a></code> | <code>*string</code> | Attribute name to aggregate. Required for all functions except COUNT. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.threshold">Threshold</a></code> | <code>*f64</code> | Threshold used in the selected function. |

---

##### `AggregationType`<sup>Required</sup> <a name="AggregationType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.aggregationType"></a>

```go
AggregationType *string
```

- *Type:* *string

Aggregation function: AVERAGE, COUNT, HISTOGRAM, MAX, MIN, PERCENTILE, SUM, UNIQUE_COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#aggregation_type PathpointFlow#aggregation_type}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Optional alias for the aggregated value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#alias PathpointFlow#alias}

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.attribute"></a>

```go
Attribute *string
```

- *Type:* *string

Attribute name to aggregate. Required for all functions except COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#attribute PathpointFlow#attribute}

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

Threshold used in the selected function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#threshold PathpointFlow#threshold}

---

### PathpointFlowKpisQueryTimeWindow <a name="PathpointFlowKpisQueryTimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

&pathpointflow.PathpointFlowKpisQueryTimeWindow {
	CustomRange: *string,
	RelativeRange: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow.property.customRange">CustomRange</a></code> | <code>*string</code> | Raw NRQL time fragment, e.g. 'SINCE 3 days ago COMPARE WITH 1 day ago'. Mutually exclusive with relative_range. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow.property.relativeRange">RelativeRange</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a></code> | relative_range block. |

---

##### `CustomRange`<sup>Optional</sup> <a name="CustomRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow.property.customRange"></a>

```go
CustomRange *string
```

- *Type:* *string

Raw NRQL time fragment, e.g. 'SINCE 3 days ago COMPARE WITH 1 day ago'. Mutually exclusive with relative_range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#custom_range PathpointFlow#custom_range}

---

##### `RelativeRange`<sup>Optional</sup> <a name="RelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow.property.relativeRange"></a>

```go
RelativeRange PathpointFlowKpisQueryTimeWindowRelativeRange
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a>

relative_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#relative_range PathpointFlow#relative_range}

---

### PathpointFlowKpisQueryTimeWindowRelativeRange <a name="PathpointFlowKpisQueryTimeWindowRelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

&pathpointflow.PathpointFlowKpisQueryTimeWindowRelativeRange {
	Since: *string,
	CompareAgainst: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange.property.since">Since</a></code> | <code>*string</code> | How far back the KPI is evaluated. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange.property.compareAgainst">CompareAgainst</a></code> | <code>*string</code> | The earlier window to compare against. |

---

##### `Since`<sup>Required</sup> <a name="Since" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange.property.since"></a>

```go
Since *string
```

- *Type:* *string

How far back the KPI is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#since PathpointFlow#since}

---

##### `CompareAgainst`<sup>Optional</sup> <a name="CompareAgainst" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange.property.compareAgainst"></a>

```go
CompareAgainst *string
```

- *Type:* *string

The earlier window to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#compare_against PathpointFlow#compare_against}

---

### PathpointFlowStages <a name="PathpointFlowStages" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

&pathpointflow.PathpointFlowStages {
	Name: *string,
	HealthRollup: *string,
	IsExcluded: interface{},
	Levels: interface{},
	Link: *string,
	Related: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.pathpointFlow.PathpointFlowStagesRelated,
	StageKpis: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.name">Name</a></code> | <code>*string</code> | Display name of the stage. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.healthRollup">HealthRollup</a></code> | <code>*string</code> | Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.isExcluded">IsExcluded</a></code> | <code>interface{}</code> | When true, this stage is excluded from flow health calculation. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.levels">Levels</a></code> | <code>interface{}</code> | levels block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.link">Link</a></code> | <code>*string</code> | Optional URL to an external resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.related">Related</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a></code> | related block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.stageKpis">StageKpis</a></code> | <code>interface{}</code> | stage_kpis block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.name"></a>

```go
Name *string
```

- *Type:* *string

Display name of the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `HealthRollup`<sup>Optional</sup> <a name="HealthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.healthRollup"></a>

```go
HealthRollup *string
```

- *Type:* *string

Health rollup strategy: ALERT_CONDITIONS or AUTOMATIC_ROLL_UP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#health_rollup PathpointFlow#health_rollup}

---

##### `IsExcluded`<sup>Optional</sup> <a name="IsExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.isExcluded"></a>

```go
IsExcluded interface{}
```

- *Type:* interface{}

When true, this stage is excluded from flow health calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#is_excluded PathpointFlow#is_excluded}

---

##### `Levels`<sup>Optional</sup> <a name="Levels" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.levels"></a>

```go
Levels interface{}
```

- *Type:* interface{}

levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#levels PathpointFlow#levels}

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.link"></a>

```go
Link *string
```

- *Type:* *string

Optional URL to an external resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#link PathpointFlow#link}

---

##### `Related`<sup>Optional</sup> <a name="Related" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.related"></a>

```go
Related PathpointFlowStagesRelated
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a>

related block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#related PathpointFlow#related}

---

##### `StageKpis`<sup>Optional</sup> <a name="StageKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStages.property.stageKpis"></a>

```go
StageKpis interface{}
```

- *Type:* interface{}

stage_kpis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#stage_kpis PathpointFlow#stage_kpis}

---

### PathpointFlowStagesLevels <a name="PathpointFlowStagesLevels" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

&pathpointflow.PathpointFlowStagesLevels {
	Steps: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels.property.steps">Steps</a></code> | <code>interface{}</code> | steps block. |

---

##### `Steps`<sup>Optional</sup> <a name="Steps" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevels.property.steps"></a>

```go
Steps interface{}
```

- *Type:* interface{}

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#steps PathpointFlow#steps}

---

### PathpointFlowStagesLevelsSteps <a name="PathpointFlowStagesLevelsSteps" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

&pathpointflow.PathpointFlowStagesLevelsSteps {
	Name: *string,
	Config: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.pathpointFlow.PathpointFlowStagesLevelsStepsConfig,
	EntitySearchQuery: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery,
	IsExcluded: interface{},
	Link: *string,
	ScopedAccounts: *[]*f64,
	Signals: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.name">Name</a></code> | <code>*string</code> | Display name of the step. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.config">Config</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a></code> | config block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.entitySearchQuery">EntitySearchQuery</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a></code> | entity_search_query block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.isExcluded">IsExcluded</a></code> | <code>interface{}</code> | When true, this step is excluded from level health calculation. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.link">Link</a></code> | <code>*string</code> | Optional URL to an external resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.scopedAccounts">ScopedAccounts</a></code> | <code>*[]*f64</code> | Account IDs whose data is scoped to this step. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.signals">Signals</a></code> | <code>interface{}</code> | signals block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.name"></a>

```go
Name *string
```

- *Type:* *string

Display name of the step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.config"></a>

```go
Config PathpointFlowStagesLevelsStepsConfig
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#config PathpointFlow#config}

---

##### `EntitySearchQuery`<sup>Optional</sup> <a name="EntitySearchQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.entitySearchQuery"></a>

```go
EntitySearchQuery PathpointFlowStagesLevelsStepsEntitySearchQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a>

entity_search_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#entity_search_query PathpointFlow#entity_search_query}

---

##### `IsExcluded`<sup>Optional</sup> <a name="IsExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.isExcluded"></a>

```go
IsExcluded interface{}
```

- *Type:* interface{}

When true, this step is excluded from level health calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#is_excluded PathpointFlow#is_excluded}

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.link"></a>

```go
Link *string
```

- *Type:* *string

Optional URL to an external resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#link PathpointFlow#link}

---

##### `ScopedAccounts`<sup>Optional</sup> <a name="ScopedAccounts" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.scopedAccounts"></a>

```go
ScopedAccounts *[]*f64
```

- *Type:* *[]*f64

Account IDs whose data is scoped to this step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#scoped_accounts PathpointFlow#scoped_accounts}

---

##### `Signals`<sup>Optional</sup> <a name="Signals" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsSteps.property.signals"></a>

```go
Signals interface{}
```

- *Type:* interface{}

signals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#signals PathpointFlow#signals}

---

### PathpointFlowStagesLevelsStepsConfig <a name="PathpointFlowStagesLevelsStepsConfig" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

&pathpointflow.PathpointFlowStagesLevelsStepsConfig {
	HealthRollup: *string,
	ThresholdType: *string,
	ThresholdValue: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.healthRollup">HealthRollup</a></code> | <code>*string</code> | How step health is rolled up: BEST_STATUS_WINS or WORST_STATUS_WINS. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.thresholdType">ThresholdType</a></code> | <code>*string</code> | Whether threshold is FIXED or PERCENTAGE. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.thresholdValue">ThresholdValue</a></code> | <code>*f64</code> | Numeric threshold value for step health evaluation. |

---

##### `HealthRollup`<sup>Optional</sup> <a name="HealthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.healthRollup"></a>

```go
HealthRollup *string
```

- *Type:* *string

How step health is rolled up: BEST_STATUS_WINS or WORST_STATUS_WINS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#health_rollup PathpointFlow#health_rollup}

---

##### `ThresholdType`<sup>Optional</sup> <a name="ThresholdType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.thresholdType"></a>

```go
ThresholdType *string
```

- *Type:* *string

Whether threshold is FIXED or PERCENTAGE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#threshold_type PathpointFlow#threshold_type}

---

##### `ThresholdValue`<sup>Optional</sup> <a name="ThresholdValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig.property.thresholdValue"></a>

```go
ThresholdValue *f64
```

- *Type:* *f64

Numeric threshold value for step health evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#threshold_value PathpointFlow#threshold_value}

---

### PathpointFlowStagesLevelsStepsEntitySearchQuery <a name="PathpointFlowStagesLevelsStepsEntitySearchQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

&pathpointflow.PathpointFlowStagesLevelsStepsEntitySearchQuery {
	Query: *string,
	IsExcluded: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery.property.query">Query</a></code> | <code>*string</code> | Filter query for signals, e.g. domain='NR1' AND type='APPLICATION'. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery.property.isExcluded">IsExcluded</a></code> | <code>interface{}</code> | When true, this query is excluded from health calculation. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

Filter query for signals, e.g. domain='NR1' AND type='APPLICATION'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#query PathpointFlow#query}

---

##### `IsExcluded`<sup>Optional</sup> <a name="IsExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery.property.isExcluded"></a>

```go
IsExcluded interface{}
```

- *Type:* interface{}

When true, this query is excluded from health calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#is_excluded PathpointFlow#is_excluded}

---

### PathpointFlowStagesLevelsStepsSignals <a name="PathpointFlowStagesLevelsStepsSignals" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

&pathpointflow.PathpointFlowStagesLevelsStepsSignals {
	Guid: *string,
	IsExcluded: interface{},
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.guid">Guid</a></code> | <code>*string</code> | Entity GUID of the signal. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.isExcluded">IsExcluded</a></code> | <code>interface{}</code> | When true, this signal is excluded from step health calculation. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.name">Name</a></code> | <code>*string</code> | Display name of the signal. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.type">Type</a></code> | <code>*string</code> | Whether this GUID belongs to an entity or an alert condition: ENTITY or ALERT. |

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.guid"></a>

```go
Guid *string
```

- *Type:* *string

Entity GUID of the signal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#guid PathpointFlow#guid}

---

##### `IsExcluded`<sup>Optional</sup> <a name="IsExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.isExcluded"></a>

```go
IsExcluded interface{}
```

- *Type:* interface{}

When true, this signal is excluded from step health calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#is_excluded PathpointFlow#is_excluded}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.name"></a>

```go
Name *string
```

- *Type:* *string

Display name of the signal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignals.property.type"></a>

```go
Type *string
```

- *Type:* *string

Whether this GUID belongs to an entity or an alert condition: ENTITY or ALERT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#type PathpointFlow#type}

---

### PathpointFlowStagesRelated <a name="PathpointFlowStagesRelated" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

&pathpointflow.PathpointFlowStagesRelated {
	Source: interface{},
	Target: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated.property.source">Source</a></code> | <code>interface{}</code> | When true, this stage acts as a source to other stages. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated.property.target">Target</a></code> | <code>interface{}</code> | When true, this stage acts as a target to other stages. |

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated.property.source"></a>

```go
Source interface{}
```

- *Type:* interface{}

When true, this stage acts as a source to other stages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#source PathpointFlow#source}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated.property.target"></a>

```go
Target interface{}
```

- *Type:* interface{}

When true, this stage acts as a target to other stages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#target PathpointFlow#target}

---

### PathpointFlowStagesStageKpis <a name="PathpointFlowStagesStageKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

&pathpointflow.PathpointFlowStagesStageKpis {
	Name: *string,
	Query: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.pathpointFlow.PathpointFlowStagesStageKpisQuery,
	AccountId: *f64,
	Category: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.name">Name</a></code> | <code>*string</code> | Display name of the KPI. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.query">Query</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a></code> | query block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.accountId">AccountId</a></code> | <code>*f64</code> | Account ID this KPI belongs to. Defaults to the flow's account_id. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.category">Category</a></code> | <code>*string</code> | Optional category to group KPIs. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.description">Description</a></code> | <code>*string</code> | Optional description. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.name"></a>

```go
Name *string
```

- *Type:* *string

Display name of the KPI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#name PathpointFlow#name}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.query"></a>

```go
Query PathpointFlowStagesStageKpisQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#query PathpointFlow#query}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

Account ID this KPI belongs to. Defaults to the flow's account_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#account_id PathpointFlow#account_id}

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.category"></a>

```go
Category *string
```

- *Type:* *string

Optional category to group KPIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#category PathpointFlow#category}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpis.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#description PathpointFlow#description}

---

### PathpointFlowStagesStageKpisQuery <a name="PathpointFlowStagesStageKpisQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

&pathpointflow.PathpointFlowStagesStageKpisQuery {
	From: *string,
	Select: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect,
	TimeWindow: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow,
	Where: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.from">From</a></code> | <code>*string</code> | Data source to query from (e.g., Transaction, Metric, Log). |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.select">Select</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a></code> | select block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.timeWindow">TimeWindow</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a></code> | time_window block. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.where">Where</a></code> | <code>*string</code> | Optional WHERE clause to filter data. |

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.from"></a>

```go
From *string
```

- *Type:* *string

Data source to query from (e.g., Transaction, Metric, Log).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#from PathpointFlow#from}

---

##### `Select`<sup>Required</sup> <a name="Select" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.select"></a>

```go
Select PathpointFlowStagesStageKpisQuerySelect
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#select PathpointFlow#select}

---

##### `TimeWindow`<sup>Optional</sup> <a name="TimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.timeWindow"></a>

```go
TimeWindow PathpointFlowStagesStageKpisQueryTimeWindow
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a>

time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#time_window PathpointFlow#time_window}

---

##### `Where`<sup>Optional</sup> <a name="Where" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery.property.where"></a>

```go
Where *string
```

- *Type:* *string

Optional WHERE clause to filter data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#where PathpointFlow#where}

---

### PathpointFlowStagesStageKpisQuerySelect <a name="PathpointFlowStagesStageKpisQuerySelect" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

&pathpointflow.PathpointFlowStagesStageKpisQuerySelect {
	AggregationType: *string,
	Alias: *string,
	Attribute: *string,
	Threshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.aggregationType">AggregationType</a></code> | <code>*string</code> | Aggregation function: AVERAGE, COUNT, HISTOGRAM, MAX, MIN, PERCENTILE, SUM, UNIQUE_COUNT. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.alias">Alias</a></code> | <code>*string</code> | Optional alias for the aggregated value. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.attribute">Attribute</a></code> | <code>*string</code> | Attribute name to aggregate. Required for all functions except COUNT. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.threshold">Threshold</a></code> | <code>*f64</code> | Threshold used in the selected function. |

---

##### `AggregationType`<sup>Required</sup> <a name="AggregationType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.aggregationType"></a>

```go
AggregationType *string
```

- *Type:* *string

Aggregation function: AVERAGE, COUNT, HISTOGRAM, MAX, MIN, PERCENTILE, SUM, UNIQUE_COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#aggregation_type PathpointFlow#aggregation_type}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Optional alias for the aggregated value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#alias PathpointFlow#alias}

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.attribute"></a>

```go
Attribute *string
```

- *Type:* *string

Attribute name to aggregate. Required for all functions except COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#attribute PathpointFlow#attribute}

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

Threshold used in the selected function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#threshold PathpointFlow#threshold}

---

### PathpointFlowStagesStageKpisQueryTimeWindow <a name="PathpointFlowStagesStageKpisQueryTimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

&pathpointflow.PathpointFlowStagesStageKpisQueryTimeWindow {
	CustomRange: *string,
	RelativeRange: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow.property.customRange">CustomRange</a></code> | <code>*string</code> | Raw NRQL time fragment, e.g. 'SINCE 3 days ago COMPARE WITH 1 day ago'. Mutually exclusive with relative_range. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow.property.relativeRange">RelativeRange</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a></code> | relative_range block. |

---

##### `CustomRange`<sup>Optional</sup> <a name="CustomRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow.property.customRange"></a>

```go
CustomRange *string
```

- *Type:* *string

Raw NRQL time fragment, e.g. 'SINCE 3 days ago COMPARE WITH 1 day ago'. Mutually exclusive with relative_range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#custom_range PathpointFlow#custom_range}

---

##### `RelativeRange`<sup>Optional</sup> <a name="RelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow.property.relativeRange"></a>

```go
RelativeRange PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a>

relative_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#relative_range PathpointFlow#relative_range}

---

### PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange <a name="PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

&pathpointflow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange {
	Since: *string,
	CompareAgainst: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange.property.since">Since</a></code> | <code>*string</code> | How far back the KPI is evaluated. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange.property.compareAgainst">CompareAgainst</a></code> | <code>*string</code> | The earlier window to compare against. |

---

##### `Since`<sup>Required</sup> <a name="Since" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange.property.since"></a>

```go
Since *string
```

- *Type:* *string

How far back the KPI is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#since PathpointFlow#since}

---

##### `CompareAgainst`<sup>Optional</sup> <a name="CompareAgainst" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange.property.compareAgainst"></a>

```go
CompareAgainst *string
```

- *Type:* *string

The earlier window to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.99.1/docs/resources/pathpoint_flow#compare_against PathpointFlow#compare_against}

---

## Classes <a name="Classes" id="Classes"></a>

### PathpointFlowKpisList <a name="PathpointFlowKpisList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowKpisList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PathpointFlowKpisList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.get"></a>

```go
func Get(index *f64) PathpointFlowKpisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PathpointFlowKpisOutputReference <a name="PathpointFlowKpisOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowKpisOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PathpointFlowKpisOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.putQuery">PutQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutQuery` <a name="PutQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.putQuery"></a>

```go
func PutQuery(value PathpointFlowKpisQuery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetCategory` <a name="ResetCategory" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetCategory"></a>

```go
func ResetCategory()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.metricQuery">MetricQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.query">Query</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference">PathpointFlowKpisQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.queryInput">QueryInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetricQuery`<sup>Required</sup> <a name="MetricQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.metricQuery"></a>

```go
func MetricQuery() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.query"></a>

```go
func Query() PathpointFlowKpisQueryOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference">PathpointFlowKpisQueryOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.queryInput"></a>

```go
func QueryInput() PathpointFlowKpisQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PathpointFlowKpisQueryOutputReference <a name="PathpointFlowKpisQueryOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowKpisQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PathpointFlowKpisQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putSelect">PutSelect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putTimeWindow">PutTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resetTimeWindow">ResetTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resetWhere">ResetWhere</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelect` <a name="PutSelect" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putSelect"></a>

```go
func PutSelect(value PathpointFlowKpisQuerySelect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putSelect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a>

---

##### `PutTimeWindow` <a name="PutTimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putTimeWindow"></a>

```go
func PutTimeWindow(value PathpointFlowKpisQueryTimeWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.putTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a>

---

##### `ResetTimeWindow` <a name="ResetTimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resetTimeWindow"></a>

```go
func ResetTimeWindow()
```

##### `ResetWhere` <a name="ResetWhere" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.resetWhere"></a>

```go
func ResetWhere()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.select">Select</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference">PathpointFlowKpisQuerySelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.timeWindow">TimeWindow</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference">PathpointFlowKpisQueryTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.selectInput">SelectInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.timeWindowInput">TimeWindowInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.whereInput">WhereInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.where">Where</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Select`<sup>Required</sup> <a name="Select" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.select"></a>

```go
func Select() PathpointFlowKpisQuerySelectOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference">PathpointFlowKpisQuerySelectOutputReference</a>

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.timeWindow"></a>

```go
func TimeWindow() PathpointFlowKpisQueryTimeWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference">PathpointFlowKpisQueryTimeWindowOutputReference</a>

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `SelectInput`<sup>Optional</sup> <a name="SelectInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.selectInput"></a>

```go
func SelectInput() PathpointFlowKpisQuerySelect
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a>

---

##### `TimeWindowInput`<sup>Optional</sup> <a name="TimeWindowInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.timeWindowInput"></a>

```go
func TimeWindowInput() PathpointFlowKpisQueryTimeWindow
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a>

---

##### `WhereInput`<sup>Optional</sup> <a name="WhereInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.whereInput"></a>

```go
func WhereInput() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `Where`<sup>Required</sup> <a name="Where" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.where"></a>

```go
func Where() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() PathpointFlowKpisQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuery">PathpointFlowKpisQuery</a>

---


### PathpointFlowKpisQuerySelectOutputReference <a name="PathpointFlowKpisQuerySelectOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowKpisQuerySelectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PathpointFlowKpisQuerySelectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetAttribute"></a>

```go
func ResetAttribute()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aggregationTypeInput">AggregationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.attributeInput">AttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aggregationType">AggregationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregationTypeInput`<sup>Optional</sup> <a name="AggregationTypeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aggregationTypeInput"></a>

```go
func AggregationTypeInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.attributeInput"></a>

```go
func AttributeInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `AggregationType`<sup>Required</sup> <a name="AggregationType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.aggregationType"></a>

```go
func AggregationType() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelectOutputReference.property.internalValue"></a>

```go
func InternalValue() PathpointFlowKpisQuerySelect
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQuerySelect">PathpointFlowKpisQuerySelect</a>

---


### PathpointFlowKpisQueryTimeWindowOutputReference <a name="PathpointFlowKpisQueryTimeWindowOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowKpisQueryTimeWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PathpointFlowKpisQueryTimeWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.putRelativeRange">PutRelativeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resetCustomRange">ResetCustomRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resetRelativeRange">ResetRelativeRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRelativeRange` <a name="PutRelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.putRelativeRange"></a>

```go
func PutRelativeRange(value PathpointFlowKpisQueryTimeWindowRelativeRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.putRelativeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a>

---

##### `ResetCustomRange` <a name="ResetCustomRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resetCustomRange"></a>

```go
func ResetCustomRange()
```

##### `ResetRelativeRange` <a name="ResetRelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.resetRelativeRange"></a>

```go
func ResetRelativeRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.relativeRange">RelativeRange</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference">PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.customRangeInput">CustomRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.relativeRangeInput">RelativeRangeInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.customRange">CustomRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RelativeRange`<sup>Required</sup> <a name="RelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.relativeRange"></a>

```go
func RelativeRange() PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference">PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference</a>

---

##### `CustomRangeInput`<sup>Optional</sup> <a name="CustomRangeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.customRangeInput"></a>

```go
func CustomRangeInput() *string
```

- *Type:* *string

---

##### `RelativeRangeInput`<sup>Optional</sup> <a name="RelativeRangeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.relativeRangeInput"></a>

```go
func RelativeRangeInput() PathpointFlowKpisQueryTimeWindowRelativeRange
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a>

---

##### `CustomRange`<sup>Required</sup> <a name="CustomRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.customRange"></a>

```go
func CustomRange() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() PathpointFlowKpisQueryTimeWindow
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindow">PathpointFlowKpisQueryTimeWindow</a>

---


### PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference <a name="PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.resetCompareAgainst">ResetCompareAgainst</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompareAgainst` <a name="ResetCompareAgainst" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.resetCompareAgainst"></a>

```go
func ResetCompareAgainst()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainstInput">CompareAgainstInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.sinceInput">SinceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainst">CompareAgainst</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.since">Since</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompareAgainstInput`<sup>Optional</sup> <a name="CompareAgainstInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainstInput"></a>

```go
func CompareAgainstInput() *string
```

- *Type:* *string

---

##### `SinceInput`<sup>Optional</sup> <a name="SinceInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.sinceInput"></a>

```go
func SinceInput() *string
```

- *Type:* *string

---

##### `CompareAgainst`<sup>Required</sup> <a name="CompareAgainst" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainst"></a>

```go
func CompareAgainst() *string
```

- *Type:* *string

---

##### `Since`<sup>Required</sup> <a name="Since" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.since"></a>

```go
func Since() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() PathpointFlowKpisQueryTimeWindowRelativeRange
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowKpisQueryTimeWindowRelativeRange">PathpointFlowKpisQueryTimeWindowRelativeRange</a>

---


### PathpointFlowStagesLevelsList <a name="PathpointFlowStagesLevelsList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowStagesLevelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PathpointFlowStagesLevelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.get"></a>

```go
func Get(index *f64) PathpointFlowStagesLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PathpointFlowStagesLevelsOutputReference <a name="PathpointFlowStagesLevelsOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowStagesLevelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PathpointFlowStagesLevelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.putSteps">PutSteps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.resetSteps">ResetSteps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSteps` <a name="PutSteps" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.putSteps"></a>

```go
func PutSteps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.putSteps.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSteps` <a name="ResetSteps" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.resetSteps"></a>

```go
func ResetSteps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList">PathpointFlowStagesLevelsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.stepsInput">StepsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.steps"></a>

```go
func Steps() PathpointFlowStagesLevelsStepsList
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList">PathpointFlowStagesLevelsStepsList</a>

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.stepsInput"></a>

```go
func StepsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PathpointFlowStagesLevelsStepsConfigOutputReference <a name="PathpointFlowStagesLevelsStepsConfigOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowStagesLevelsStepsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PathpointFlowStagesLevelsStepsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetHealthRollup">ResetHealthRollup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetThresholdType">ResetThresholdType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetThresholdValue">ResetThresholdValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHealthRollup` <a name="ResetHealthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetHealthRollup"></a>

```go
func ResetHealthRollup()
```

##### `ResetThresholdType` <a name="ResetThresholdType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetThresholdType"></a>

```go
func ResetThresholdType()
```

##### `ResetThresholdValue` <a name="ResetThresholdValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.resetThresholdValue"></a>

```go
func ResetThresholdValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.healthRollupInput">HealthRollupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdTypeInput">ThresholdTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdValueInput">ThresholdValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.healthRollup">HealthRollup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdType">ThresholdType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdValue">ThresholdValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HealthRollupInput`<sup>Optional</sup> <a name="HealthRollupInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.healthRollupInput"></a>

```go
func HealthRollupInput() *string
```

- *Type:* *string

---

##### `ThresholdTypeInput`<sup>Optional</sup> <a name="ThresholdTypeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdTypeInput"></a>

```go
func ThresholdTypeInput() *string
```

- *Type:* *string

---

##### `ThresholdValueInput`<sup>Optional</sup> <a name="ThresholdValueInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdValueInput"></a>

```go
func ThresholdValueInput() *f64
```

- *Type:* *f64

---

##### `HealthRollup`<sup>Required</sup> <a name="HealthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.healthRollup"></a>

```go
func HealthRollup() *string
```

- *Type:* *string

---

##### `ThresholdType`<sup>Required</sup> <a name="ThresholdType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdType"></a>

```go
func ThresholdType() *string
```

- *Type:* *string

---

##### `ThresholdValue`<sup>Required</sup> <a name="ThresholdValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.thresholdValue"></a>

```go
func ThresholdValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() PathpointFlowStagesLevelsStepsConfig
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a>

---


### PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference <a name="PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.resetIsExcluded">ResetIsExcluded</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsExcluded` <a name="ResetIsExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.resetIsExcluded"></a>

```go
func ResetIsExcluded()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.isExcludedInput">IsExcludedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.isExcluded">IsExcluded</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsExcludedInput`<sup>Optional</sup> <a name="IsExcludedInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.isExcludedInput"></a>

```go
func IsExcludedInput() interface{}
```

- *Type:* interface{}

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `IsExcluded`<sup>Required</sup> <a name="IsExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.isExcluded"></a>

```go
func IsExcluded() interface{}
```

- *Type:* interface{}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() PathpointFlowStagesLevelsStepsEntitySearchQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a>

---


### PathpointFlowStagesLevelsStepsList <a name="PathpointFlowStagesLevelsStepsList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowStagesLevelsStepsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PathpointFlowStagesLevelsStepsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.get"></a>

```go
func Get(index *f64) PathpointFlowStagesLevelsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PathpointFlowStagesLevelsStepsOutputReference <a name="PathpointFlowStagesLevelsStepsOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowStagesLevelsStepsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PathpointFlowStagesLevelsStepsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putEntitySearchQuery">PutEntitySearchQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putSignals">PutSignals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetEntitySearchQuery">ResetEntitySearchQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetIsExcluded">ResetIsExcluded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetLink">ResetLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetScopedAccounts">ResetScopedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetSignals">ResetSignals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putConfig"></a>

```go
func PutConfig(value PathpointFlowStagesLevelsStepsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a>

---

##### `PutEntitySearchQuery` <a name="PutEntitySearchQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putEntitySearchQuery"></a>

```go
func PutEntitySearchQuery(value PathpointFlowStagesLevelsStepsEntitySearchQuery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putEntitySearchQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a>

---

##### `PutSignals` <a name="PutSignals" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putSignals"></a>

```go
func PutSignals(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.putSignals.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetEntitySearchQuery` <a name="ResetEntitySearchQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetEntitySearchQuery"></a>

```go
func ResetEntitySearchQuery()
```

##### `ResetIsExcluded` <a name="ResetIsExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetIsExcluded"></a>

```go
func ResetIsExcluded()
```

##### `ResetLink` <a name="ResetLink" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetLink"></a>

```go
func ResetLink()
```

##### `ResetScopedAccounts` <a name="ResetScopedAccounts" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetScopedAccounts"></a>

```go
func ResetScopedAccounts()
```

##### `ResetSignals` <a name="ResetSignals" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.resetSignals"></a>

```go
func ResetSignals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference">PathpointFlowStagesLevelsStepsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.entitySearchQuery">EntitySearchQuery</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference">PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.signals">Signals</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList">PathpointFlowStagesLevelsStepsSignalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.entitySearchQueryInput">EntitySearchQueryInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.isExcludedInput">IsExcludedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.linkInput">LinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.scopedAccountsInput">ScopedAccountsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.signalsInput">SignalsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.isExcluded">IsExcluded</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.scopedAccounts">ScopedAccounts</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.config"></a>

```go
func Config() PathpointFlowStagesLevelsStepsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfigOutputReference">PathpointFlowStagesLevelsStepsConfigOutputReference</a>

---

##### `EntitySearchQuery`<sup>Required</sup> <a name="EntitySearchQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.entitySearchQuery"></a>

```go
func EntitySearchQuery() PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference">PathpointFlowStagesLevelsStepsEntitySearchQueryOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Signals`<sup>Required</sup> <a name="Signals" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.signals"></a>

```go
func Signals() PathpointFlowStagesLevelsStepsSignalsList
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList">PathpointFlowStagesLevelsStepsSignalsList</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.configInput"></a>

```go
func ConfigInput() PathpointFlowStagesLevelsStepsConfig
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsConfig">PathpointFlowStagesLevelsStepsConfig</a>

---

##### `EntitySearchQueryInput`<sup>Optional</sup> <a name="EntitySearchQueryInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.entitySearchQueryInput"></a>

```go
func EntitySearchQueryInput() PathpointFlowStagesLevelsStepsEntitySearchQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsEntitySearchQuery">PathpointFlowStagesLevelsStepsEntitySearchQuery</a>

---

##### `IsExcludedInput`<sup>Optional</sup> <a name="IsExcludedInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.isExcludedInput"></a>

```go
func IsExcludedInput() interface{}
```

- *Type:* interface{}

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.linkInput"></a>

```go
func LinkInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScopedAccountsInput`<sup>Optional</sup> <a name="ScopedAccountsInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.scopedAccountsInput"></a>

```go
func ScopedAccountsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `SignalsInput`<sup>Optional</sup> <a name="SignalsInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.signalsInput"></a>

```go
func SignalsInput() interface{}
```

- *Type:* interface{}

---

##### `IsExcluded`<sup>Required</sup> <a name="IsExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.isExcluded"></a>

```go
func IsExcluded() interface{}
```

- *Type:* interface{}

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScopedAccounts`<sup>Required</sup> <a name="ScopedAccounts" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.scopedAccounts"></a>

```go
func ScopedAccounts() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PathpointFlowStagesLevelsStepsSignalsList <a name="PathpointFlowStagesLevelsStepsSignalsList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowStagesLevelsStepsSignalsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PathpointFlowStagesLevelsStepsSignalsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.get"></a>

```go
func Get(index *f64) PathpointFlowStagesLevelsStepsSignalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PathpointFlowStagesLevelsStepsSignalsOutputReference <a name="PathpointFlowStagesLevelsStepsSignalsOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowStagesLevelsStepsSignalsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PathpointFlowStagesLevelsStepsSignalsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetIsExcluded">ResetIsExcluded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsExcluded` <a name="ResetIsExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetIsExcluded"></a>

```go
func ResetIsExcluded()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.guidInput">GuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.isExcludedInput">IsExcludedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.guid">Guid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.isExcluded">IsExcluded</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GuidInput`<sup>Optional</sup> <a name="GuidInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.guidInput"></a>

```go
func GuidInput() *string
```

- *Type:* *string

---

##### `IsExcludedInput`<sup>Optional</sup> <a name="IsExcludedInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.isExcludedInput"></a>

```go
func IsExcludedInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.guid"></a>

```go
func Guid() *string
```

- *Type:* *string

---

##### `IsExcluded`<sup>Required</sup> <a name="IsExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.isExcluded"></a>

```go
func IsExcluded() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsStepsSignalsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PathpointFlowStagesList <a name="PathpointFlowStagesList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowStagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PathpointFlowStagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.get"></a>

```go
func Get(index *f64) PathpointFlowStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PathpointFlowStagesOutputReference <a name="PathpointFlowStagesOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowStagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PathpointFlowStagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putLevels">PutLevels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putRelated">PutRelated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putStageKpis">PutStageKpis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetHealthRollup">ResetHealthRollup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetIsExcluded">ResetIsExcluded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetLevels">ResetLevels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetLink">ResetLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetRelated">ResetRelated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetStageKpis">ResetStageKpis</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLevels` <a name="PutLevels" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putLevels"></a>

```go
func PutLevels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putLevels.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRelated` <a name="PutRelated" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putRelated"></a>

```go
func PutRelated(value PathpointFlowStagesRelated)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putRelated.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a>

---

##### `PutStageKpis` <a name="PutStageKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putStageKpis"></a>

```go
func PutStageKpis(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.putStageKpis.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHealthRollup` <a name="ResetHealthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetHealthRollup"></a>

```go
func ResetHealthRollup()
```

##### `ResetIsExcluded` <a name="ResetIsExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetIsExcluded"></a>

```go
func ResetIsExcluded()
```

##### `ResetLevels` <a name="ResetLevels" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetLevels"></a>

```go
func ResetLevels()
```

##### `ResetLink` <a name="ResetLink" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetLink"></a>

```go
func ResetLink()
```

##### `ResetRelated` <a name="ResetRelated" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetRelated"></a>

```go
func ResetRelated()
```

##### `ResetStageKpis` <a name="ResetStageKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.resetStageKpis"></a>

```go
func ResetStageKpis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.levels">Levels</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList">PathpointFlowStagesLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.related">Related</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference">PathpointFlowStagesRelatedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.stageKpis">StageKpis</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList">PathpointFlowStagesStageKpisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.healthRollupInput">HealthRollupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.isExcludedInput">IsExcludedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.levelsInput">LevelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.linkInput">LinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.relatedInput">RelatedInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.stageKpisInput">StageKpisInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.healthRollup">HealthRollup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.isExcluded">IsExcluded</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Levels`<sup>Required</sup> <a name="Levels" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.levels"></a>

```go
func Levels() PathpointFlowStagesLevelsList
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesLevelsList">PathpointFlowStagesLevelsList</a>

---

##### `Related`<sup>Required</sup> <a name="Related" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.related"></a>

```go
func Related() PathpointFlowStagesRelatedOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference">PathpointFlowStagesRelatedOutputReference</a>

---

##### `StageKpis`<sup>Required</sup> <a name="StageKpis" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.stageKpis"></a>

```go
func StageKpis() PathpointFlowStagesStageKpisList
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList">PathpointFlowStagesStageKpisList</a>

---

##### `HealthRollupInput`<sup>Optional</sup> <a name="HealthRollupInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.healthRollupInput"></a>

```go
func HealthRollupInput() *string
```

- *Type:* *string

---

##### `IsExcludedInput`<sup>Optional</sup> <a name="IsExcludedInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.isExcludedInput"></a>

```go
func IsExcludedInput() interface{}
```

- *Type:* interface{}

---

##### `LevelsInput`<sup>Optional</sup> <a name="LevelsInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.levelsInput"></a>

```go
func LevelsInput() interface{}
```

- *Type:* interface{}

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.linkInput"></a>

```go
func LinkInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RelatedInput`<sup>Optional</sup> <a name="RelatedInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.relatedInput"></a>

```go
func RelatedInput() PathpointFlowStagesRelated
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a>

---

##### `StageKpisInput`<sup>Optional</sup> <a name="StageKpisInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.stageKpisInput"></a>

```go
func StageKpisInput() interface{}
```

- *Type:* interface{}

---

##### `HealthRollup`<sup>Required</sup> <a name="HealthRollup" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.healthRollup"></a>

```go
func HealthRollup() *string
```

- *Type:* *string

---

##### `IsExcluded`<sup>Required</sup> <a name="IsExcluded" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.isExcluded"></a>

```go
func IsExcluded() interface{}
```

- *Type:* interface{}

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PathpointFlowStagesRelatedOutputReference <a name="PathpointFlowStagesRelatedOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowStagesRelatedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PathpointFlowStagesRelatedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.targetInput">TargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.source">Source</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.target">Target</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.targetInput"></a>

```go
func TargetInput() interface{}
```

- *Type:* interface{}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.source"></a>

```go
func Source() interface{}
```

- *Type:* interface{}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.target"></a>

```go
func Target() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelatedOutputReference.property.internalValue"></a>

```go
func InternalValue() PathpointFlowStagesRelated
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesRelated">PathpointFlowStagesRelated</a>

---


### PathpointFlowStagesStageKpisList <a name="PathpointFlowStagesStageKpisList" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowStagesStageKpisList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PathpointFlowStagesStageKpisList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.get"></a>

```go
func Get(index *f64) PathpointFlowStagesStageKpisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PathpointFlowStagesStageKpisOutputReference <a name="PathpointFlowStagesStageKpisOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowStagesStageKpisOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PathpointFlowStagesStageKpisOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.putQuery">PutQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutQuery` <a name="PutQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.putQuery"></a>

```go
func PutQuery(value PathpointFlowStagesStageKpisQuery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetCategory` <a name="ResetCategory" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetCategory"></a>

```go
func ResetCategory()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.metricQuery">MetricQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.query">Query</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference">PathpointFlowStagesStageKpisQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.queryInput">QueryInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetricQuery`<sup>Required</sup> <a name="MetricQuery" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.metricQuery"></a>

```go
func MetricQuery() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.query"></a>

```go
func Query() PathpointFlowStagesStageKpisQueryOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference">PathpointFlowStagesStageKpisQueryOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.queryInput"></a>

```go
func QueryInput() PathpointFlowStagesStageKpisQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PathpointFlowStagesStageKpisQueryOutputReference <a name="PathpointFlowStagesStageKpisQueryOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowStagesStageKpisQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PathpointFlowStagesStageKpisQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putSelect">PutSelect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putTimeWindow">PutTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resetTimeWindow">ResetTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resetWhere">ResetWhere</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelect` <a name="PutSelect" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putSelect"></a>

```go
func PutSelect(value PathpointFlowStagesStageKpisQuerySelect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putSelect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a>

---

##### `PutTimeWindow` <a name="PutTimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putTimeWindow"></a>

```go
func PutTimeWindow(value PathpointFlowStagesStageKpisQueryTimeWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.putTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a>

---

##### `ResetTimeWindow` <a name="ResetTimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resetTimeWindow"></a>

```go
func ResetTimeWindow()
```

##### `ResetWhere` <a name="ResetWhere" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.resetWhere"></a>

```go
func ResetWhere()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.select">Select</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference">PathpointFlowStagesStageKpisQuerySelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.timeWindow">TimeWindow</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference">PathpointFlowStagesStageKpisQueryTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.selectInput">SelectInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.timeWindowInput">TimeWindowInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.whereInput">WhereInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.where">Where</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Select`<sup>Required</sup> <a name="Select" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.select"></a>

```go
func Select() PathpointFlowStagesStageKpisQuerySelectOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference">PathpointFlowStagesStageKpisQuerySelectOutputReference</a>

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.timeWindow"></a>

```go
func TimeWindow() PathpointFlowStagesStageKpisQueryTimeWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference">PathpointFlowStagesStageKpisQueryTimeWindowOutputReference</a>

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `SelectInput`<sup>Optional</sup> <a name="SelectInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.selectInput"></a>

```go
func SelectInput() PathpointFlowStagesStageKpisQuerySelect
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a>

---

##### `TimeWindowInput`<sup>Optional</sup> <a name="TimeWindowInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.timeWindowInput"></a>

```go
func TimeWindowInput() PathpointFlowStagesStageKpisQueryTimeWindow
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a>

---

##### `WhereInput`<sup>Optional</sup> <a name="WhereInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.whereInput"></a>

```go
func WhereInput() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `Where`<sup>Required</sup> <a name="Where" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.where"></a>

```go
func Where() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() PathpointFlowStagesStageKpisQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuery">PathpointFlowStagesStageKpisQuery</a>

---


### PathpointFlowStagesStageKpisQuerySelectOutputReference <a name="PathpointFlowStagesStageKpisQuerySelectOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowStagesStageKpisQuerySelectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PathpointFlowStagesStageKpisQuerySelectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetAttribute"></a>

```go
func ResetAttribute()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aggregationTypeInput">AggregationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.attributeInput">AttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aggregationType">AggregationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregationTypeInput`<sup>Optional</sup> <a name="AggregationTypeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aggregationTypeInput"></a>

```go
func AggregationTypeInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.attributeInput"></a>

```go
func AttributeInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `AggregationType`<sup>Required</sup> <a name="AggregationType" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.aggregationType"></a>

```go
func AggregationType() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelectOutputReference.property.internalValue"></a>

```go
func InternalValue() PathpointFlowStagesStageKpisQuerySelect
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQuerySelect">PathpointFlowStagesStageKpisQuerySelect</a>

---


### PathpointFlowStagesStageKpisQueryTimeWindowOutputReference <a name="PathpointFlowStagesStageKpisQueryTimeWindowOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowStagesStageKpisQueryTimeWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PathpointFlowStagesStageKpisQueryTimeWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.putRelativeRange">PutRelativeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resetCustomRange">ResetCustomRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resetRelativeRange">ResetRelativeRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRelativeRange` <a name="PutRelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.putRelativeRange"></a>

```go
func PutRelativeRange(value PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.putRelativeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a>

---

##### `ResetCustomRange` <a name="ResetCustomRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resetCustomRange"></a>

```go
func ResetCustomRange()
```

##### `ResetRelativeRange` <a name="ResetRelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.resetRelativeRange"></a>

```go
func ResetRelativeRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.relativeRange">RelativeRange</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.customRangeInput">CustomRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.relativeRangeInput">RelativeRangeInput</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.customRange">CustomRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RelativeRange`<sup>Required</sup> <a name="RelativeRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.relativeRange"></a>

```go
func RelativeRange() PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference</a>

---

##### `CustomRangeInput`<sup>Optional</sup> <a name="CustomRangeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.customRangeInput"></a>

```go
func CustomRangeInput() *string
```

- *Type:* *string

---

##### `RelativeRangeInput`<sup>Optional</sup> <a name="RelativeRangeInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.relativeRangeInput"></a>

```go
func RelativeRangeInput() PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a>

---

##### `CustomRange`<sup>Required</sup> <a name="CustomRange" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.customRange"></a>

```go
func CustomRange() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() PathpointFlowStagesStageKpisQueryTimeWindow
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindow">PathpointFlowStagesStageKpisQueryTimeWindow</a>

---


### PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference <a name="PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/pathpointflow"

pathpointflow.NewPathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.resetCompareAgainst">ResetCompareAgainst</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompareAgainst` <a name="ResetCompareAgainst" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.resetCompareAgainst"></a>

```go
func ResetCompareAgainst()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainstInput">CompareAgainstInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.sinceInput">SinceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainst">CompareAgainst</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.since">Since</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompareAgainstInput`<sup>Optional</sup> <a name="CompareAgainstInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainstInput"></a>

```go
func CompareAgainstInput() *string
```

- *Type:* *string

---

##### `SinceInput`<sup>Optional</sup> <a name="SinceInput" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.sinceInput"></a>

```go
func SinceInput() *string
```

- *Type:* *string

---

##### `CompareAgainst`<sup>Required</sup> <a name="CompareAgainst" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.compareAgainst"></a>

```go
func CompareAgainst() *string
```

- *Type:* *string

---

##### `Since`<sup>Required</sup> <a name="Since" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.since"></a>

```go
func Since() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange
```

- *Type:* <a href="#@cdktn/provider-newrelic.pathpointFlow.PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange">PathpointFlowStagesStageKpisQueryTimeWindowRelativeRange</a>

---



