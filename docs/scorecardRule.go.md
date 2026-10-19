# `scorecardRule` Submodule <a name="`scorecardRule` Submodule" id="@cdktn/provider-newrelic.scorecardRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ScorecardRule <a name="ScorecardRule" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule newrelic_scorecard_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/scorecardrule"

scorecardrule.NewScorecardRule(scope Construct, id *string, config ScorecardRuleConfig) ScorecardRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig">ScorecardRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig">ScorecardRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putNrqlEngine">PutNrqlEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetImpactWeight">ResetImpactWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetProgressLevel">ResetProgressLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetRunInterval">ResetRunInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNrqlEngine` <a name="PutNrqlEngine" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putNrqlEngine"></a>

```go
func PutNrqlEngine(value ScorecardRuleNrqlEngine)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putNrqlEngine.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTimeouts"></a>

```go
func PutTimeouts(value ScorecardRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetId"></a>

```go
func ResetId()
```

##### `ResetImpactWeight` <a name="ResetImpactWeight" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetImpactWeight"></a>

```go
func ResetImpactWeight()
```

##### `ResetProgressLevel` <a name="ResetProgressLevel" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetProgressLevel"></a>

```go
func ResetProgressLevel()
```

##### `ResetRunInterval` <a name="ResetRunInterval" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetRunInterval"></a>

```go
func ResetRunInterval()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ScorecardRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/scorecardrule"

scorecardrule.ScorecardRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/scorecardrule"

scorecardrule.ScorecardRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/scorecardrule"

scorecardrule.ScorecardRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/scorecardrule"

scorecardrule.ScorecardRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ScorecardRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ScorecardRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ScorecardRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ScorecardRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nrqlEngine">NrqlEngine</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference">ScorecardRuleNrqlEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList">ScorecardRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference">ScorecardRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.impactWeightInput">ImpactWeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nrqlEngineInput">NrqlEngineInput</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.progressLevelInput">ProgressLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.runIntervalInput">RunIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.impactWeight">ImpactWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.progressLevel">ProgressLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.runInterval">RunInterval</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NrqlEngine`<sup>Required</sup> <a name="NrqlEngine" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nrqlEngine"></a>

```go
func NrqlEngine() ScorecardRuleNrqlEngineOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference">ScorecardRuleNrqlEngineOutputReference</a>

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tags"></a>

```go
func Tags() ScorecardRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList">ScorecardRuleTagsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.timeouts"></a>

```go
func Timeouts() ScorecardRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference">ScorecardRuleTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImpactWeightInput`<sup>Optional</sup> <a name="ImpactWeightInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.impactWeightInput"></a>

```go
func ImpactWeightInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NrqlEngineInput`<sup>Optional</sup> <a name="NrqlEngineInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.nrqlEngineInput"></a>

```go
func NrqlEngineInput() ScorecardRuleNrqlEngine
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a>

---

##### `ProgressLevelInput`<sup>Optional</sup> <a name="ProgressLevelInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.progressLevelInput"></a>

```go
func ProgressLevelInput() *string
```

- *Type:* *string

---

##### `RunIntervalInput`<sup>Optional</sup> <a name="RunIntervalInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.runIntervalInput"></a>

```go
func RunIntervalInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImpactWeight`<sup>Required</sup> <a name="ImpactWeight" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.impactWeight"></a>

```go
func ImpactWeight() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProgressLevel`<sup>Required</sup> <a name="ProgressLevel" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.progressLevel"></a>

```go
func ProgressLevel() *string
```

- *Type:* *string

---

##### `RunInterval`<sup>Required</sup> <a name="RunInterval" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.runInterval"></a>

```go
func RunInterval() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ScorecardRuleConfig <a name="ScorecardRuleConfig" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/scorecardrule"

&scorecardrule.ScorecardRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Enabled: interface{},
	Name: *string,
	NrqlEngine: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.scorecardRule.ScorecardRuleNrqlEngine,
	Description: *string,
	Id: *string,
	ImpactWeight: *f64,
	ProgressLevel: *string,
	RunInterval: *f64,
	Tags: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16.scorecardRule.ScorecardRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether this rule is active. Set to false to pause evaluation without deleting the rule. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.name">Name</a></code> | <code>*string</code> | The name of the scorecard rule. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.nrqlEngine">NrqlEngine</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a></code> | nrql_engine block. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.description">Description</a></code> | <code>*string</code> | A description of the rule. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#id ScorecardRule#id}. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.impactWeight">ImpactWeight</a></code> | <code>*f64</code> | Relative weight of this rule's contribution to the overall scorecard score. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.progressLevel">ProgressLevel</a></code> | <code>*string</code> | The progress level ID from the parent scorecard this rule maps to (e.g. 'red'). Must match a progress_levels.id defined on the scorecard. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.runInterval">RunInterval</a></code> | <code>*f64</code> | Evaluation frequency in minutes. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.tags">Tags</a></code> | <code>interface{}</code> | tags block. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether this rule is active. Set to false to pause evaluation without deleting the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#enabled ScorecardRule#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the scorecard rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#name ScorecardRule#name}

---

##### `NrqlEngine`<sup>Required</sup> <a name="NrqlEngine" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.nrqlEngine"></a>

```go
NrqlEngine ScorecardRuleNrqlEngine
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a>

nrql_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#nrql_engine ScorecardRule#nrql_engine}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#description ScorecardRule#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#id ScorecardRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImpactWeight`<sup>Optional</sup> <a name="ImpactWeight" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.impactWeight"></a>

```go
ImpactWeight *f64
```

- *Type:* *f64

Relative weight of this rule's contribution to the overall scorecard score.

Must be a non-negative integer. Omit for equal weighting across all rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#impact_weight ScorecardRule#impact_weight}

---

##### `ProgressLevel`<sup>Optional</sup> <a name="ProgressLevel" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.progressLevel"></a>

```go
ProgressLevel *string
```

- *Type:* *string

The progress level ID from the parent scorecard this rule maps to (e.g. 'red'). Must match a progress_levels.id defined on the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#progress_level ScorecardRule#progress_level}

---

##### `RunInterval`<sup>Optional</sup> <a name="RunInterval" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.runInterval"></a>

```go
RunInterval *f64
```

- *Type:* *f64

Evaluation frequency in minutes.

Must be one of: 60 (hourly), 360 (6h), 720 (12h), 1440 (daily). Omit to use the API default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#run_interval ScorecardRule#run_interval}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#tags ScorecardRule#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleConfig.property.timeouts"></a>

```go
Timeouts ScorecardRuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts">ScorecardRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#timeouts ScorecardRule#timeouts}

---

### ScorecardRuleNrqlEngine <a name="ScorecardRuleNrqlEngine" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/scorecardrule"

&scorecardrule.ScorecardRuleNrqlEngine {
	Accounts: *[]*f64,
	Query: *string,
	JoinAccounts: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.accounts">Accounts</a></code> | <code>*[]*f64</code> | Account IDs where this rule runs. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.query">Query</a></code> | <code>*string</code> | The NRQL query. Must be FACET-ed and alias the result as 'score'. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.joinAccounts">JoinAccounts</a></code> | <code>*[]*f64</code> | Additional account IDs to join with the query accounts. |

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.accounts"></a>

```go
Accounts *[]*f64
```

- *Type:* *[]*f64

Account IDs where this rule runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#accounts ScorecardRule#accounts}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.query"></a>

```go
Query *string
```

- *Type:* *string

The NRQL query. Must be FACET-ed and alias the result as 'score'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#query ScorecardRule#query}

---

##### `JoinAccounts`<sup>Optional</sup> <a name="JoinAccounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine.property.joinAccounts"></a>

```go
JoinAccounts *[]*f64
```

- *Type:* *[]*f64

Additional account IDs to join with the query accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#join_accounts ScorecardRule#join_accounts}

---

### ScorecardRuleTags <a name="ScorecardRuleTags" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/scorecardrule"

&scorecardrule.ScorecardRuleTags {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags.property.key">Key</a></code> | <code>*string</code> | The tag key. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags.property.values">Values</a></code> | <code>*[]*string</code> | The tag values. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#key ScorecardRule#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTags.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#values ScorecardRule#values}

---

### ScorecardRuleTimeouts <a name="ScorecardRuleTimeouts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/scorecardrule"

&scorecardrule.ScorecardRuleTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#create ScorecardRule#create}. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#update ScorecardRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#create ScorecardRule#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/resources/scorecard_rule#update ScorecardRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ScorecardRuleNrqlEngineOutputReference <a name="ScorecardRuleNrqlEngineOutputReference" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/scorecardrule"

scorecardrule.NewScorecardRuleNrqlEngineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ScorecardRuleNrqlEngineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.resetJoinAccounts">ResetJoinAccounts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJoinAccounts` <a name="ResetJoinAccounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.resetJoinAccounts"></a>

```go
func ResetJoinAccounts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.accountsInput">AccountsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.joinAccountsInput">JoinAccountsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.accounts">Accounts</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.joinAccounts">JoinAccounts</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountsInput`<sup>Optional</sup> <a name="AccountsInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.accountsInput"></a>

```go
func AccountsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `JoinAccountsInput`<sup>Optional</sup> <a name="JoinAccountsInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.joinAccountsInput"></a>

```go
func JoinAccountsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.accounts"></a>

```go
func Accounts() *[]*f64
```

- *Type:* *[]*f64

---

##### `JoinAccounts`<sup>Required</sup> <a name="JoinAccounts" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.joinAccounts"></a>

```go
func JoinAccounts() *[]*f64
```

- *Type:* *[]*f64

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngineOutputReference.property.internalValue"></a>

```go
func InternalValue() ScorecardRuleNrqlEngine
```

- *Type:* <a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleNrqlEngine">ScorecardRuleNrqlEngine</a>

---


### ScorecardRuleTagsList <a name="ScorecardRuleTagsList" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/scorecardrule"

scorecardrule.NewScorecardRuleTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ScorecardRuleTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.get"></a>

```go
func Get(index *f64) ScorecardRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ScorecardRuleTagsOutputReference <a name="ScorecardRuleTagsOutputReference" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/scorecardrule"

scorecardrule.NewScorecardRuleTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ScorecardRuleTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ScorecardRuleTimeoutsOutputReference <a name="ScorecardRuleTimeoutsOutputReference" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/scorecardrule"

scorecardrule.NewScorecardRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ScorecardRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.scorecardRule.ScorecardRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



