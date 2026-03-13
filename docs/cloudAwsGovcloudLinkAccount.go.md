# `cloudAwsGovcloudLinkAccount` Submodule <a name="`cloudAwsGovcloudLinkAccount` Submodule" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAwsGovcloudLinkAccount <a name="CloudAwsGovcloudLinkAccount" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_govcloud_link_account newrelic_cloud_aws_govcloud_link_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/cloudawsgovcloudlinkaccount"

cloudawsgovcloudlinkaccount.NewCloudAwsGovcloudLinkAccount(scope Construct, id *string, config CloudAwsGovcloudLinkAccountConfig) CloudAwsGovcloudLinkAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig">CloudAwsGovcloudLinkAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig">CloudAwsGovcloudLinkAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetMetricCollectionMode">ResetMetricCollectionMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetId"></a>

```go
func ResetId()
```

##### `ResetMetricCollectionMode` <a name="ResetMetricCollectionMode" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.resetMetricCollectionMode"></a>

```go
func ResetMetricCollectionMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudAwsGovcloudLinkAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/cloudawsgovcloudlinkaccount"

cloudawsgovcloudlinkaccount.CloudAwsGovcloudLinkAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/cloudawsgovcloudlinkaccount"

cloudawsgovcloudlinkaccount.CloudAwsGovcloudLinkAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/cloudawsgovcloudlinkaccount"

cloudawsgovcloudlinkaccount.CloudAwsGovcloudLinkAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/cloudawsgovcloudlinkaccount"

cloudawsgovcloudlinkaccount.CloudAwsGovcloudLinkAccount_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudAwsGovcloudLinkAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudAwsGovcloudLinkAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudAwsGovcloudLinkAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_govcloud_link_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudAwsGovcloudLinkAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.metricCollectionModeInput">MetricCollectionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.metricCollectionMode">MetricCollectionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetricCollectionModeInput`<sup>Optional</sup> <a name="MetricCollectionModeInput" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.metricCollectionModeInput"></a>

```go
func MetricCollectionModeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetricCollectionMode`<sup>Required</sup> <a name="MetricCollectionMode" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.metricCollectionMode"></a>

```go
func MetricCollectionMode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAwsGovcloudLinkAccountConfig <a name="CloudAwsGovcloudLinkAccountConfig" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v14/cloudawsgovcloudlinkaccount"

&cloudawsgovcloudlinkaccount.CloudAwsGovcloudLinkAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Arn: *string,
	Name: *string,
	AccountId: *f64,
	Id: *string,
	MetricCollectionMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.arn">Arn</a></code> | <code>*string</code> | The ARN of the identifying AWS GovCloud account. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.name">Name</a></code> | <code>*string</code> | Name of the AWS GovCloud 'Linked Account' to identify in New Relic. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_govcloud_link_account#id CloudAwsGovcloudLinkAccount#id}. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.metricCollectionMode">MetricCollectionMode</a></code> | <code>*string</code> | The mode by which metric data is to be collected from the linked AWS GovCloud account. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

The ARN of the identifying AWS GovCloud account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_govcloud_link_account#arn CloudAwsGovcloudLinkAccount#arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the AWS GovCloud 'Linked Account' to identify in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_govcloud_link_account#name CloudAwsGovcloudLinkAccount#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_govcloud_link_account#account_id CloudAwsGovcloudLinkAccount#account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_govcloud_link_account#id CloudAwsGovcloudLinkAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetricCollectionMode`<sup>Optional</sup> <a name="MetricCollectionMode" id="@cdktn/provider-newrelic.cloudAwsGovcloudLinkAccount.CloudAwsGovcloudLinkAccountConfig.property.metricCollectionMode"></a>

```go
MetricCollectionMode *string
```

- *Type:* *string

The mode by which metric data is to be collected from the linked AWS GovCloud account.

Use 'PUSH' for Metric Streams and 'PULL' for API Polling based metric collection respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/cloud_aws_govcloud_link_account#metric_collection_mode CloudAwsGovcloudLinkAccount#metric_collection_mode}

---



