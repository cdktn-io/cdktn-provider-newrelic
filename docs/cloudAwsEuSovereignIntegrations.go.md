# `cloudAwsEuSovereignIntegrations` Submodule <a name="`cloudAwsEuSovereignIntegrations` Submodule" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAwsEuSovereignIntegrations <a name="CloudAwsEuSovereignIntegrations" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations newrelic_cloud_aws_eu_sovereign_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/cloudawseusovereignintegrations"

cloudawseusovereignintegrations.NewCloudAwsEuSovereignIntegrations(scope Construct, id *string, config CloudAwsEuSovereignIntegrationsConfig) CloudAwsEuSovereignIntegrations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig">CloudAwsEuSovereignIntegrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig">CloudAwsEuSovereignIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putBilling">PutBilling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putCloudtrail">PutCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putXRay">PutXRay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetBilling">ResetBilling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetCloudtrail">ResetCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetXRay">ResetXRay</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBilling` <a name="PutBilling" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putBilling"></a>

```go
func PutBilling(value CloudAwsEuSovereignIntegrationsBilling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putBilling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a>

---

##### `PutCloudtrail` <a name="PutCloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putCloudtrail"></a>

```go
func PutCloudtrail(value CloudAwsEuSovereignIntegrationsCloudtrail)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putCloudtrail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a>

---

##### `PutXRay` <a name="PutXRay" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putXRay"></a>

```go
func PutXRay(value CloudAwsEuSovereignIntegrationsXRay)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putXRay.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetBilling` <a name="ResetBilling" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetBilling"></a>

```go
func ResetBilling()
```

##### `ResetCloudtrail` <a name="ResetCloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetCloudtrail"></a>

```go
func ResetCloudtrail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetId"></a>

```go
func ResetId()
```

##### `ResetXRay` <a name="ResetXRay" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetXRay"></a>

```go
func ResetXRay()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudAwsEuSovereignIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/cloudawseusovereignintegrations"

cloudawseusovereignintegrations.CloudAwsEuSovereignIntegrations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/cloudawseusovereignintegrations"

cloudawseusovereignintegrations.CloudAwsEuSovereignIntegrations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/cloudawseusovereignintegrations"

cloudawseusovereignintegrations.CloudAwsEuSovereignIntegrations_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/cloudawseusovereignintegrations"

cloudawseusovereignintegrations.CloudAwsEuSovereignIntegrations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudAwsEuSovereignIntegrations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudAwsEuSovereignIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudAwsEuSovereignIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudAwsEuSovereignIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.billing">Billing</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference">CloudAwsEuSovereignIntegrationsBillingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cloudtrail">Cloudtrail</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference">CloudAwsEuSovereignIntegrationsCloudtrailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.xRay">XRay</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference">CloudAwsEuSovereignIntegrationsXRayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.billingInput">BillingInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cloudtrailInput">CloudtrailInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.linkedAccountIdInput">LinkedAccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.xRayInput">XRayInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.linkedAccountId">LinkedAccountId</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Billing`<sup>Required</sup> <a name="Billing" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.billing"></a>

```go
func Billing() CloudAwsEuSovereignIntegrationsBillingOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference">CloudAwsEuSovereignIntegrationsBillingOutputReference</a>

---

##### `Cloudtrail`<sup>Required</sup> <a name="Cloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cloudtrail"></a>

```go
func Cloudtrail() CloudAwsEuSovereignIntegrationsCloudtrailOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference">CloudAwsEuSovereignIntegrationsCloudtrailOutputReference</a>

---

##### `XRay`<sup>Required</sup> <a name="XRay" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.xRay"></a>

```go
func XRay() CloudAwsEuSovereignIntegrationsXRayOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference">CloudAwsEuSovereignIntegrationsXRayOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `BillingInput`<sup>Optional</sup> <a name="BillingInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.billingInput"></a>

```go
func BillingInput() CloudAwsEuSovereignIntegrationsBilling
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a>

---

##### `CloudtrailInput`<sup>Optional</sup> <a name="CloudtrailInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cloudtrailInput"></a>

```go
func CloudtrailInput() CloudAwsEuSovereignIntegrationsCloudtrail
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LinkedAccountIdInput`<sup>Optional</sup> <a name="LinkedAccountIdInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.linkedAccountIdInput"></a>

```go
func LinkedAccountIdInput() *f64
```

- *Type:* *f64

---

##### `XRayInput`<sup>Optional</sup> <a name="XRayInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.xRayInput"></a>

```go
func XRayInput() CloudAwsEuSovereignIntegrationsXRay
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LinkedAccountId`<sup>Required</sup> <a name="LinkedAccountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.linkedAccountId"></a>

```go
func LinkedAccountId() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAwsEuSovereignIntegrationsBilling <a name="CloudAwsEuSovereignIntegrationsBilling" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/cloudawseusovereignintegrations"

&cloudawseusovereignintegrations.CloudAwsEuSovereignIntegrationsBilling {
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#metrics_polling_interval CloudAwsEuSovereignIntegrations#metrics_polling_interval}

---

### CloudAwsEuSovereignIntegrationsCloudtrail <a name="CloudAwsEuSovereignIntegrationsCloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/cloudawseusovereignintegrations"

&cloudawseusovereignintegrations.CloudAwsEuSovereignIntegrationsCloudtrail {
	AwsRegions: *[]*string,
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail.property.awsRegions">AwsRegions</a></code> | <code>*[]*string</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `AwsRegions`<sup>Optional</sup> <a name="AwsRegions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail.property.awsRegions"></a>

```go
AwsRegions *[]*string
```

- *Type:* *[]*string

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#aws_regions CloudAwsEuSovereignIntegrations#aws_regions}

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#metrics_polling_interval CloudAwsEuSovereignIntegrations#metrics_polling_interval}

---

### CloudAwsEuSovereignIntegrationsConfig <a name="CloudAwsEuSovereignIntegrationsConfig" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/cloudawseusovereignintegrations"

&cloudawseusovereignintegrations.CloudAwsEuSovereignIntegrationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	LinkedAccountId: *f64,
	AccountId: *f64,
	Billing: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling,
	Cloudtrail: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail,
	Id: *string,
	XRay: github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.linkedAccountId">LinkedAccountId</a></code> | <code>*f64</code> | The ID of the linked AWS EU Sovereign account in New Relic. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.billing">Billing</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a></code> | billing block. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.cloudtrail">Cloudtrail</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a></code> | cloudtrail block. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#id CloudAwsEuSovereignIntegrations#id}. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.xRay">XRay</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a></code> | x_ray block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LinkedAccountId`<sup>Required</sup> <a name="LinkedAccountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.linkedAccountId"></a>

```go
LinkedAccountId *f64
```

- *Type:* *f64

The ID of the linked AWS EU Sovereign account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#linked_account_id CloudAwsEuSovereignIntegrations#linked_account_id}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#account_id CloudAwsEuSovereignIntegrations#account_id}

---

##### `Billing`<sup>Optional</sup> <a name="Billing" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.billing"></a>

```go
Billing CloudAwsEuSovereignIntegrationsBilling
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a>

billing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#billing CloudAwsEuSovereignIntegrations#billing}

---

##### `Cloudtrail`<sup>Optional</sup> <a name="Cloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.cloudtrail"></a>

```go
Cloudtrail CloudAwsEuSovereignIntegrationsCloudtrail
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a>

cloudtrail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#cloudtrail CloudAwsEuSovereignIntegrations#cloudtrail}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#id CloudAwsEuSovereignIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `XRay`<sup>Optional</sup> <a name="XRay" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.xRay"></a>

```go
XRay CloudAwsEuSovereignIntegrationsXRay
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a>

x_ray block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#x_ray CloudAwsEuSovereignIntegrations#x_ray}

---

### CloudAwsEuSovereignIntegrationsXRay <a name="CloudAwsEuSovereignIntegrationsXRay" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/cloudawseusovereignintegrations"

&cloudawseusovereignintegrations.CloudAwsEuSovereignIntegrationsXRay {
	AwsRegions: *[]*string,
	MetricsPollingInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay.property.awsRegions">AwsRegions</a></code> | <code>*[]*string</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | The data polling interval in seconds. |

---

##### `AwsRegions`<sup>Optional</sup> <a name="AwsRegions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay.property.awsRegions"></a>

```go
AwsRegions *[]*string
```

- *Type:* *[]*string

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#aws_regions CloudAwsEuSovereignIntegrations#aws_regions}

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay.property.metricsPollingInterval"></a>

```go
MetricsPollingInterval *f64
```

- *Type:* *f64

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_eu_sovereign_integrations#metrics_polling_interval CloudAwsEuSovereignIntegrations#metrics_polling_interval}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAwsEuSovereignIntegrationsBillingOutputReference <a name="CloudAwsEuSovereignIntegrationsBillingOutputReference" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/cloudawseusovereignintegrations"

cloudawseusovereignintegrations.NewCloudAwsEuSovereignIntegrationsBillingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudAwsEuSovereignIntegrationsBillingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudAwsEuSovereignIntegrationsBilling
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a>

---


### CloudAwsEuSovereignIntegrationsCloudtrailOutputReference <a name="CloudAwsEuSovereignIntegrationsCloudtrailOutputReference" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/cloudawseusovereignintegrations"

cloudawseusovereignintegrations.NewCloudAwsEuSovereignIntegrationsCloudtrailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudAwsEuSovereignIntegrationsCloudtrailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resetAwsRegions">ResetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsRegions` <a name="ResetAwsRegions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resetAwsRegions"></a>

```go
func ResetAwsRegions()
```

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.awsRegionsInput">AwsRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.awsRegions">AwsRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsRegionsInput`<sup>Optional</sup> <a name="AwsRegionsInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.awsRegionsInput"></a>

```go
func AwsRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `AwsRegions`<sup>Required</sup> <a name="AwsRegions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.awsRegions"></a>

```go
func AwsRegions() *[]*string
```

- *Type:* *[]*string

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudAwsEuSovereignIntegrationsCloudtrail
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a>

---


### CloudAwsEuSovereignIntegrationsXRayOutputReference <a name="CloudAwsEuSovereignIntegrationsXRayOutputReference" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/cloudawseusovereignintegrations"

cloudawseusovereignintegrations.NewCloudAwsEuSovereignIntegrationsXRayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudAwsEuSovereignIntegrationsXRayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resetAwsRegions">ResetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsRegions` <a name="ResetAwsRegions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resetAwsRegions"></a>

```go
func ResetAwsRegions()
```

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resetMetricsPollingInterval"></a>

```go
func ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.awsRegionsInput">AwsRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.awsRegions">AwsRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsRegionsInput`<sup>Optional</sup> <a name="AwsRegionsInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.awsRegionsInput"></a>

```go
func AwsRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.metricsPollingIntervalInput"></a>

```go
func MetricsPollingIntervalInput() *f64
```

- *Type:* *f64

---

##### `AwsRegions`<sup>Required</sup> <a name="AwsRegions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.awsRegions"></a>

```go
func AwsRegions() *[]*string
```

- *Type:* *[]*string

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.metricsPollingInterval"></a>

```go
func MetricsPollingInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudAwsEuSovereignIntegrationsXRay
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a>

---



