# `dataNewrelicFleetConfiguration` Submodule <a name="`dataNewrelicFleetConfiguration` Submodule" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicFleetConfiguration <a name="DataNewrelicFleetConfiguration" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/data-sources/fleet_configuration newrelic_fleet_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/datanewrelicfleetconfiguration"

datanewrelicfleetconfiguration.NewDataNewrelicFleetConfiguration(scope Construct, id *string, config DataNewrelicFleetConfigurationConfig) DataNewrelicFleetConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig">DataNewrelicFleetConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig">DataNewrelicFleetConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetConfigurationId">ResetConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetOrganizationId">ResetOrganizationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetVersionEntityId">ResetVersionEntityId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetConfigurationId` <a name="ResetConfigurationId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetConfigurationId"></a>

```go
func ResetConfigurationId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetName"></a>

```go
func ResetName()
```

##### `ResetOrganizationId` <a name="ResetOrganizationId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetOrganizationId"></a>

```go
func ResetOrganizationId()
```

##### `ResetVersionEntityId` <a name="ResetVersionEntityId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetVersionEntityId"></a>

```go
func ResetVersionEntityId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataNewrelicFleetConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/datanewrelicfleetconfiguration"

datanewrelicfleetconfiguration.DataNewrelicFleetConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/datanewrelicfleetconfiguration"

datanewrelicfleetconfiguration.DataNewrelicFleetConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/datanewrelicfleetconfiguration"

datanewrelicfleetconfiguration.DataNewrelicFleetConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/datanewrelicfleetconfiguration"

datanewrelicfleetconfiguration.DataNewrelicFleetConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataNewrelicFleetConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataNewrelicFleetConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataNewrelicFleetConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/data-sources/fleet_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataNewrelicFleetConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationContent">ConfigurationContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.latestVersionEntityId">LatestVersionEntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityIds">VersionEntityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationIdInput">ConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.organizationIdInput">OrganizationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityIdInput">VersionEntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationId">ConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityId">VersionEntityId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ConfigurationContent`<sup>Required</sup> <a name="ConfigurationContent" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationContent"></a>

```go
func ConfigurationContent() *string
```

- *Type:* *string

---

##### `LatestVersionEntityId`<sup>Required</sup> <a name="LatestVersionEntityId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.latestVersionEntityId"></a>

```go
func LatestVersionEntityId() *string
```

- *Type:* *string

---

##### `VersionEntityIds`<sup>Required</sup> <a name="VersionEntityIds" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityIds"></a>

```go
func VersionEntityIds() *[]*string
```

- *Type:* *[]*string

---

##### `ConfigurationIdInput`<sup>Optional</sup> <a name="ConfigurationIdInput" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationIdInput"></a>

```go
func ConfigurationIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.organizationIdInput"></a>

```go
func OrganizationIdInput() *string
```

- *Type:* *string

---

##### `VersionEntityIdInput`<sup>Optional</sup> <a name="VersionEntityIdInput" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityIdInput"></a>

```go
func VersionEntityIdInput() *string
```

- *Type:* *string

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationId"></a>

```go
func ConfigurationId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `VersionEntityId`<sup>Required</sup> <a name="VersionEntityId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityId"></a>

```go
func VersionEntityId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicFleetConfigurationConfig <a name="DataNewrelicFleetConfigurationConfig" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-newrelic-go/newrelic/v15/datanewrelicfleetconfiguration"

&datanewrelicfleetconfiguration.DataNewrelicFleetConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ConfigurationId: *string,
	Id: *string,
	Name: *string,
	OrganizationId: *string,
	VersionEntityId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.configurationId">ConfigurationId</a></code> | <code>*string</code> | The GUID of the fleet configuration entity. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/data-sources/fleet_configuration#id DataNewrelicFleetConfiguration#id}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | The name of the fleet configuration. The first matching configuration is returned. Returns the content of its latest version. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.organizationId">OrganizationId</a></code> | <code>*string</code> | The organization ID. Resolved automatically from the provider when omitted. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.versionEntityId">VersionEntityId</a></code> | <code>*string</code> | The GUID of a specific configuration version entity. Returns the content of that exact version. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigurationId`<sup>Optional</sup> <a name="ConfigurationId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.configurationId"></a>

```go
ConfigurationId *string
```

- *Type:* *string

The GUID of the fleet configuration entity.

Returns the content of the latest version. Populated automatically when looking up by version_entity_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/data-sources/fleet_configuration#configuration_id DataNewrelicFleetConfiguration#configuration_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/data-sources/fleet_configuration#id DataNewrelicFleetConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the fleet configuration. The first matching configuration is returned. Returns the content of its latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/data-sources/fleet_configuration#name DataNewrelicFleetConfiguration#name}

---

##### `OrganizationId`<sup>Optional</sup> <a name="OrganizationId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.organizationId"></a>

```go
OrganizationId *string
```

- *Type:* *string

The organization ID. Resolved automatically from the provider when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/data-sources/fleet_configuration#organization_id DataNewrelicFleetConfiguration#organization_id}

---

##### `VersionEntityId`<sup>Optional</sup> <a name="VersionEntityId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.versionEntityId"></a>

```go
VersionEntityId *string
```

- *Type:* *string

The GUID of a specific configuration version entity. Returns the content of that exact version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/data-sources/fleet_configuration#version_entity_id DataNewrelicFleetConfiguration#version_entity_id}

---



