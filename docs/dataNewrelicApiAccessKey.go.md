# `dataNewrelicApiAccessKey` Submodule <a name="`dataNewrelicApiAccessKey` Submodule" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicApiAccessKey <a name="DataNewrelicApiAccessKey" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/api_access_key newrelic_api_access_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/datanewrelicapiaccesskey"

datanewrelicapiaccesskey.NewDataNewrelicApiAccessKey(scope Construct, id *string, config DataNewrelicApiAccessKeyConfig) DataNewrelicApiAccessKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig">DataNewrelicApiAccessKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig">DataNewrelicApiAccessKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetIngestType">ResetIngestType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetKeyId">ResetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetId"></a>

```go
func ResetId()
```

##### `ResetIngestType` <a name="ResetIngestType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetIngestType"></a>

```go
func ResetIngestType()
```

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetKeyId"></a>

```go
func ResetKeyId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetName"></a>

```go
func ResetName()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetUserId"></a>

```go
func ResetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataNewrelicApiAccessKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/datanewrelicapiaccesskey"

datanewrelicapiaccesskey.DataNewrelicApiAccessKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/datanewrelicapiaccesskey"

datanewrelicapiaccesskey.DataNewrelicApiAccessKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/datanewrelicapiaccesskey"

datanewrelicapiaccesskey.DataNewrelicApiAccessKey_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/datanewrelicapiaccesskey"

datanewrelicapiaccesskey.DataNewrelicApiAccessKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataNewrelicApiAccessKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataNewrelicApiAccessKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataNewrelicApiAccessKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/api_access_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataNewrelicApiAccessKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.notes">Notes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.accountIdInput">AccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.ingestTypeInput">IngestTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyTypeInput">KeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.userIdInput">UserIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.accountId">AccountId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.ingestType">IngestType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.userId">UserId</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.notes"></a>

```go
func Notes() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.accountIdInput"></a>

```go
func AccountIdInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IngestTypeInput`<sup>Optional</sup> <a name="IngestTypeInput" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.ingestTypeInput"></a>

```go
func IngestTypeInput() *string
```

- *Type:* *string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyTypeInput"></a>

```go
func KeyTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.userIdInput"></a>

```go
func UserIdInput() *f64
```

- *Type:* *f64

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.accountId"></a>

```go
func AccountId() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IngestType`<sup>Required</sup> <a name="IngestType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.ingestType"></a>

```go
func IngestType() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.userId"></a>

```go
func UserId() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicApiAccessKeyConfig <a name="DataNewrelicApiAccessKeyConfig" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v16/datanewrelicapiaccesskey"

&datanewrelicapiaccesskey.DataNewrelicApiAccessKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	KeyType: *string,
	AccountId: *f64,
	Id: *string,
	IngestType: *string,
	KeyId: *string,
	Name: *string,
	UserId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.keyType">KeyType</a></code> | <code>*string</code> | The type of the key, one of INGEST or USER. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.accountId">AccountId</a></code> | <code>*f64</code> | The New Relic account ID the key belongs to. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/api_access_key#id DataNewrelicApiAccessKey#id}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.ingestType">IngestType</a></code> | <code>*string</code> | The type of the ingest key, one of LICENSE or BROWSER. Only applies when `key_type` is INGEST. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.keyId">KeyId</a></code> | <code>*string</code> | The ID of the key. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.name">Name</a></code> | <code>*string</code> | The name of the key. Used to narrow down the search when `key_id` is not specified. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.userId">UserId</a></code> | <code>*f64</code> | The ID of the user that owns the key. Only applies when `key_type` is USER. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.keyType"></a>

```go
KeyType *string
```

- *Type:* *string

The type of the key, one of INGEST or USER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/api_access_key#key_type DataNewrelicApiAccessKey#key_type}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.accountId"></a>

```go
AccountId *f64
```

- *Type:* *f64

The New Relic account ID the key belongs to.

Defaults to the account ID configured on the provider when not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/api_access_key#account_id DataNewrelicApiAccessKey#account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/api_access_key#id DataNewrelicApiAccessKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IngestType`<sup>Optional</sup> <a name="IngestType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.ingestType"></a>

```go
IngestType *string
```

- *Type:* *string

The type of the ingest key, one of LICENSE or BROWSER. Only applies when `key_type` is INGEST.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/api_access_key#ingest_type DataNewrelicApiAccessKey#ingest_type}

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

The ID of the key.

When specified, the key is fetched directly by its ID instead of searching by other attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/api_access_key#key_id DataNewrelicApiAccessKey#key_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the key. Used to narrow down the search when `key_id` is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/api_access_key#name DataNewrelicApiAccessKey#name}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.userId"></a>

```go
UserId *f64
```

- *Type:* *f64

The ID of the user that owns the key. Only applies when `key_type` is USER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/api_access_key#user_id DataNewrelicApiAccessKey#user_id}

---



