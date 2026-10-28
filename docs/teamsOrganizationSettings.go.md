# `teamsOrganizationSettings` Submodule <a name="`teamsOrganizationSettings` Submodule" id="@cdktn/provider-newrelic.teamsOrganizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamsOrganizationSettings <a name="TeamsOrganizationSettings" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings newrelic_teams_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v17/teamsorganizationsettings"

teamsorganizationsettings.NewTeamsOrganizationSettings(scope Construct, id *string, config TeamsOrganizationSettingsConfig) TeamsOrganizationSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig">TeamsOrganizationSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig">TeamsOrganizationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putHierarchyLevels">PutHierarchyLevels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putSyncGroupRules">PutSyncGroupRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetDiscoveryEnabled">ResetDiscoveryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetDiscoveryTagKeys">ResetDiscoveryTagKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetHierarchyLevels">ResetHierarchyLevels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetSyncGroupRules">ResetSyncGroupRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetSyncGroupsEnabled">ResetSyncGroupsEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHierarchyLevels` <a name="PutHierarchyLevels" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putHierarchyLevels"></a>

```go
func PutHierarchyLevels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putHierarchyLevels.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSyncGroupRules` <a name="PutSyncGroupRules" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putSyncGroupRules"></a>

```go
func PutSyncGroupRules(value TeamsOrganizationSettingsSyncGroupRules)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putSyncGroupRules.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a>

---

##### `ResetDiscoveryEnabled` <a name="ResetDiscoveryEnabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetDiscoveryEnabled"></a>

```go
func ResetDiscoveryEnabled()
```

##### `ResetDiscoveryTagKeys` <a name="ResetDiscoveryTagKeys" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetDiscoveryTagKeys"></a>

```go
func ResetDiscoveryTagKeys()
```

##### `ResetHierarchyLevels` <a name="ResetHierarchyLevels" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetHierarchyLevels"></a>

```go
func ResetHierarchyLevels()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetSyncGroupRules` <a name="ResetSyncGroupRules" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetSyncGroupRules"></a>

```go
func ResetSyncGroupRules()
```

##### `ResetSyncGroupsEnabled` <a name="ResetSyncGroupsEnabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetSyncGroupsEnabled"></a>

```go
func ResetSyncGroupsEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TeamsOrganizationSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v17/teamsorganizationsettings"

teamsorganizationsettings.TeamsOrganizationSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v17/teamsorganizationsettings"

teamsorganizationsettings.TeamsOrganizationSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v17/teamsorganizationsettings"

teamsorganizationsettings.TeamsOrganizationSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v17/teamsorganizationsettings"

teamsorganizationsettings.TeamsOrganizationSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a TeamsOrganizationSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TeamsOrganizationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TeamsOrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the TeamsOrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.hierarchyLevels">HierarchyLevels</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList">TeamsOrganizationSettingsHierarchyLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupRules">SyncGroupRules</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference">TeamsOrganizationSettingsSyncGroupRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryEnabledInput">DiscoveryEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryTagKeysInput">DiscoveryTagKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.hierarchyLevelsInput">HierarchyLevelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupRulesInput">SyncGroupRulesInput</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupsEnabledInput">SyncGroupsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryEnabled">DiscoveryEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryTagKeys">DiscoveryTagKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupsEnabled">SyncGroupsEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HierarchyLevels`<sup>Required</sup> <a name="HierarchyLevels" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.hierarchyLevels"></a>

```go
func HierarchyLevels() TeamsOrganizationSettingsHierarchyLevelsList
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList">TeamsOrganizationSettingsHierarchyLevelsList</a>

---

##### `SyncGroupRules`<sup>Required</sup> <a name="SyncGroupRules" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupRules"></a>

```go
func SyncGroupRules() TeamsOrganizationSettingsSyncGroupRulesOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference">TeamsOrganizationSettingsSyncGroupRulesOutputReference</a>

---

##### `DiscoveryEnabledInput`<sup>Optional</sup> <a name="DiscoveryEnabledInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryEnabledInput"></a>

```go
func DiscoveryEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DiscoveryTagKeysInput`<sup>Optional</sup> <a name="DiscoveryTagKeysInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryTagKeysInput"></a>

```go
func DiscoveryTagKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `HierarchyLevelsInput`<sup>Optional</sup> <a name="HierarchyLevelsInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.hierarchyLevelsInput"></a>

```go
func HierarchyLevelsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SyncGroupRulesInput`<sup>Optional</sup> <a name="SyncGroupRulesInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupRulesInput"></a>

```go
func SyncGroupRulesInput() TeamsOrganizationSettingsSyncGroupRules
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a>

---

##### `SyncGroupsEnabledInput`<sup>Optional</sup> <a name="SyncGroupsEnabledInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupsEnabledInput"></a>

```go
func SyncGroupsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DiscoveryEnabled`<sup>Required</sup> <a name="DiscoveryEnabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryEnabled"></a>

```go
func DiscoveryEnabled() interface{}
```

- *Type:* interface{}

---

##### `DiscoveryTagKeys`<sup>Required</sup> <a name="DiscoveryTagKeys" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryTagKeys"></a>

```go
func DiscoveryTagKeys() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SyncGroupsEnabled`<sup>Required</sup> <a name="SyncGroupsEnabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupsEnabled"></a>

```go
func SyncGroupsEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamsOrganizationSettingsConfig <a name="TeamsOrganizationSettingsConfig" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v17/teamsorganizationsettings"

&teamsorganizationsettings.TeamsOrganizationSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DiscoveryEnabled: interface{},
	DiscoveryTagKeys: *[]*string,
	HierarchyLevels: interface{},
	Id: *string,
	SyncGroupRules: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v17.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules,
	SyncGroupsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.discoveryEnabled">DiscoveryEnabled</a></code> | <code>interface{}</code> | Whether tag-based entity discovery is enabled. When true, entities with a matching tag are automatically assigned to teams. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.discoveryTagKeys">DiscoveryTagKeys</a></code> | <code>*[]*string</code> | Tag keys used for entity discovery (e.g. ["team"]). Entities with these tags are auto-assigned to the team whose name or alias matches the tag value. Must contain at least one key when declared. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.hierarchyLevels">HierarchyLevels</a></code> | <code>interface{}</code> | hierarchy_levels block. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#id TeamsOrganizationSettings#id}. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.syncGroupRules">SyncGroupRules</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a></code> | sync_group_rules block. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.syncGroupsEnabled">SyncGroupsEnabled</a></code> | <code>interface{}</code> | Whether automatic team creation from IdP groups is enabled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DiscoveryEnabled`<sup>Optional</sup> <a name="DiscoveryEnabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.discoveryEnabled"></a>

```go
DiscoveryEnabled interface{}
```

- *Type:* interface{}

Whether tag-based entity discovery is enabled. When true, entities with a matching tag are automatically assigned to teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#discovery_enabled TeamsOrganizationSettings#discovery_enabled}

---

##### `DiscoveryTagKeys`<sup>Optional</sup> <a name="DiscoveryTagKeys" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.discoveryTagKeys"></a>

```go
DiscoveryTagKeys *[]*string
```

- *Type:* *[]*string

Tag keys used for entity discovery (e.g. ["team"]). Entities with these tags are auto-assigned to the team whose name or alias matches the tag value. Must contain at least one key when declared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#discovery_tag_keys TeamsOrganizationSettings#discovery_tag_keys}

---

##### `HierarchyLevels`<sup>Optional</sup> <a name="HierarchyLevels" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.hierarchyLevels"></a>

```go
HierarchyLevels interface{}
```

- *Type:* interface{}

hierarchy_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#hierarchy_levels TeamsOrganizationSettings#hierarchy_levels}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#id TeamsOrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SyncGroupRules`<sup>Optional</sup> <a name="SyncGroupRules" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.syncGroupRules"></a>

```go
SyncGroupRules TeamsOrganizationSettingsSyncGroupRules
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a>

sync_group_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#sync_group_rules TeamsOrganizationSettings#sync_group_rules}

---

##### `SyncGroupsEnabled`<sup>Optional</sup> <a name="SyncGroupsEnabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.syncGroupsEnabled"></a>

```go
SyncGroupsEnabled interface{}
```

- *Type:* interface{}

Whether automatic team creation from IdP groups is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#sync_groups_enabled TeamsOrganizationSettings#sync_groups_enabled}

---

### TeamsOrganizationSettingsHierarchyLevels <a name="TeamsOrganizationSettingsHierarchyLevels" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v17/teamsorganizationsettings"

&teamsorganizationsettings.TeamsOrganizationSettingsHierarchyLevels {
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels.property.id">Id</a></code> | <code>*string</code> | GUID of the hierarchy level entity. Obtain from the newrelic_teams_hierarchy_levels data source. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels.property.name">Name</a></code> | <code>*string</code> | Display name of this hierarchy level (e.g. 'Division', 'Squad'). Renaming here updates the entity in the API. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels.property.id"></a>

```go
Id *string
```

- *Type:* *string

GUID of the hierarchy level entity. Obtain from the newrelic_teams_hierarchy_levels data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#id TeamsOrganizationSettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels.property.name"></a>

```go
Name *string
```

- *Type:* *string

Display name of this hierarchy level (e.g. 'Division', 'Squad'). Renaming here updates the entity in the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#name TeamsOrganizationSettings#name}

---

### TeamsOrganizationSettingsSyncGroupRules <a name="TeamsOrganizationSettingsSyncGroupRules" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v17/teamsorganizationsettings"

&teamsorganizationsettings.TeamsOrganizationSettingsSyncGroupRules {
	Conditions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules.property.conditions">Conditions</a></code> | <code>interface{}</code> | conditions block. |

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#conditions TeamsOrganizationSettings#conditions}

---

### TeamsOrganizationSettingsSyncGroupRulesConditions <a name="TeamsOrganizationSettingsSyncGroupRulesConditions" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v17/teamsorganizationsettings"

&teamsorganizationsettings.TeamsOrganizationSettingsSyncGroupRulesConditions {
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions.property.type">Type</a></code> | <code>*string</code> | Match type: STARTS_WITH, ENDS_WITH, or CONTAINS. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions.property.value">Value</a></code> | <code>*string</code> | The string to match against the group name. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions.property.type"></a>

```go
Type *string
```

- *Type:* *string

Match type: STARTS_WITH, ENDS_WITH, or CONTAINS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#type TeamsOrganizationSettings#type}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions.property.value"></a>

```go
Value *string
```

- *Type:* *string

The string to match against the group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.6/docs/resources/teams_organization_settings#value TeamsOrganizationSettings#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamsOrganizationSettingsHierarchyLevelsList <a name="TeamsOrganizationSettingsHierarchyLevelsList" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v17/teamsorganizationsettings"

teamsorganizationsettings.NewTeamsOrganizationSettingsHierarchyLevelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TeamsOrganizationSettingsHierarchyLevelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.get"></a>

```go
func Get(index *f64) TeamsOrganizationSettingsHierarchyLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TeamsOrganizationSettingsHierarchyLevelsOutputReference <a name="TeamsOrganizationSettingsHierarchyLevelsOutputReference" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v17/teamsorganizationsettings"

teamsorganizationsettings.NewTeamsOrganizationSettingsHierarchyLevelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TeamsOrganizationSettingsHierarchyLevelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TeamsOrganizationSettingsSyncGroupRulesConditionsList <a name="TeamsOrganizationSettingsSyncGroupRulesConditionsList" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v17/teamsorganizationsettings"

teamsorganizationsettings.NewTeamsOrganizationSettingsSyncGroupRulesConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TeamsOrganizationSettingsSyncGroupRulesConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.get"></a>

```go
func Get(index *f64) TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference <a name="TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v17/teamsorganizationsettings"

teamsorganizationsettings.NewTeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TeamsOrganizationSettingsSyncGroupRulesOutputReference <a name="TeamsOrganizationSettingsSyncGroupRulesOutputReference" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v17/teamsorganizationsettings"

teamsorganizationsettings.NewTeamsOrganizationSettingsSyncGroupRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsOrganizationSettingsSyncGroupRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.putConditions">PutConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList">TeamsOrganizationSettingsSyncGroupRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.conditions"></a>

```go
func Conditions() TeamsOrganizationSettingsSyncGroupRulesConditionsList
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList">TeamsOrganizationSettingsSyncGroupRulesConditionsList</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsOrganizationSettingsSyncGroupRules
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a>

---



