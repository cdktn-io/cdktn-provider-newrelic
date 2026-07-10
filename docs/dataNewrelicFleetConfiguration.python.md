# `dataNewrelicFleetConfiguration` Submodule <a name="`dataNewrelicFleetConfiguration` Submodule" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicFleetConfiguration <a name="DataNewrelicFleetConfiguration" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.3/docs/data-sources/fleet_configuration newrelic_fleet_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer"></a>

```python
from cdktn_provider_newrelic import data_newrelic_fleet_configuration

dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration_id: str = None,
  id: str = None,
  name: str = None,
  organization_id: str = None,
  version_entity_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.configurationId">configuration_id</a></code> | <code>str</code> | The GUID of the fleet configuration entity. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.3/docs/data-sources/fleet_configuration#id DataNewrelicFleetConfiguration#id}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the fleet configuration. The first matching configuration is returned. Returns the content of its latest version. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.organizationId">organization_id</a></code> | <code>str</code> | The organization ID. Resolved automatically from the provider when omitted. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.versionEntityId">version_entity_id</a></code> | <code>str</code> | The GUID of a specific configuration version entity. Returns the content of that exact version. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration_id`<sup>Optional</sup> <a name="configuration_id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.configurationId"></a>

- *Type:* str

The GUID of the fleet configuration entity.

Returns the content of the latest version. Populated automatically when looking up by version_entity_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.3/docs/data-sources/fleet_configuration#configuration_id DataNewrelicFleetConfiguration#configuration_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.3/docs/data-sources/fleet_configuration#id DataNewrelicFleetConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.name"></a>

- *Type:* str

The name of the fleet configuration. The first matching configuration is returned. Returns the content of its latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.3/docs/data-sources/fleet_configuration#name DataNewrelicFleetConfiguration#name}

---

##### `organization_id`<sup>Optional</sup> <a name="organization_id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.organizationId"></a>

- *Type:* str

The organization ID. Resolved automatically from the provider when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.3/docs/data-sources/fleet_configuration#organization_id DataNewrelicFleetConfiguration#organization_id}

---

##### `version_entity_id`<sup>Optional</sup> <a name="version_entity_id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.versionEntityId"></a>

- *Type:* str

The GUID of a specific configuration version entity. Returns the content of that exact version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.3/docs/data-sources/fleet_configuration#version_entity_id DataNewrelicFleetConfiguration#version_entity_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetConfigurationId">reset_configuration_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetOrganizationId">reset_organization_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetVersionEntityId">reset_version_entity_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_configuration_id` <a name="reset_configuration_id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetConfigurationId"></a>

```python
def reset_configuration_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_organization_id` <a name="reset_organization_id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetOrganizationId"></a>

```python
def reset_organization_id() -> None
```

##### `reset_version_entity_id` <a name="reset_version_entity_id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetVersionEntityId"></a>

```python
def reset_version_entity_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataNewrelicFleetConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isConstruct"></a>

```python
from cdktn_provider_newrelic import data_newrelic_fleet_configuration

dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_newrelic import data_newrelic_fleet_configuration

dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformDataSource"></a>

```python
from cdktn_provider_newrelic import data_newrelic_fleet_configuration

dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_newrelic import data_newrelic_fleet_configuration

dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataNewrelicFleetConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataNewrelicFleetConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataNewrelicFleetConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.3/docs/data-sources/fleet_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataNewrelicFleetConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationContent">configuration_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.latestVersionEntityId">latest_version_entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityIds">version_entity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationIdInput">configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.organizationIdInput">organization_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityIdInput">version_entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationId">configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityId">version_entity_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `configuration_content`<sup>Required</sup> <a name="configuration_content" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationContent"></a>

```python
configuration_content: str
```

- *Type:* str

---

##### `latest_version_entity_id`<sup>Required</sup> <a name="latest_version_entity_id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.latestVersionEntityId"></a>

```python
latest_version_entity_id: str
```

- *Type:* str

---

##### `version_entity_ids`<sup>Required</sup> <a name="version_entity_ids" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityIds"></a>

```python
version_entity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `configuration_id_input`<sup>Optional</sup> <a name="configuration_id_input" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationIdInput"></a>

```python
configuration_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `organization_id_input`<sup>Optional</sup> <a name="organization_id_input" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.organizationIdInput"></a>

```python
organization_id_input: str
```

- *Type:* str

---

##### `version_entity_id_input`<sup>Optional</sup> <a name="version_entity_id_input" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityIdInput"></a>

```python
version_entity_id_input: str
```

- *Type:* str

---

##### `configuration_id`<sup>Required</sup> <a name="configuration_id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationId"></a>

```python
configuration_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `version_entity_id`<sup>Required</sup> <a name="version_entity_id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityId"></a>

```python
version_entity_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicFleetConfigurationConfig <a name="DataNewrelicFleetConfigurationConfig" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_newrelic import data_newrelic_fleet_configuration

dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration_id: str = None,
  id: str = None,
  name: str = None,
  organization_id: str = None,
  version_entity_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.configurationId">configuration_id</a></code> | <code>str</code> | The GUID of the fleet configuration entity. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.3/docs/data-sources/fleet_configuration#id DataNewrelicFleetConfiguration#id}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.name">name</a></code> | <code>str</code> | The name of the fleet configuration. The first matching configuration is returned. Returns the content of its latest version. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.organizationId">organization_id</a></code> | <code>str</code> | The organization ID. Resolved automatically from the provider when omitted. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.versionEntityId">version_entity_id</a></code> | <code>str</code> | The GUID of a specific configuration version entity. Returns the content of that exact version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration_id`<sup>Optional</sup> <a name="configuration_id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.configurationId"></a>

```python
configuration_id: str
```

- *Type:* str

The GUID of the fleet configuration entity.

Returns the content of the latest version. Populated automatically when looking up by version_entity_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.3/docs/data-sources/fleet_configuration#configuration_id DataNewrelicFleetConfiguration#configuration_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.3/docs/data-sources/fleet_configuration#id DataNewrelicFleetConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the fleet configuration. The first matching configuration is returned. Returns the content of its latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.3/docs/data-sources/fleet_configuration#name DataNewrelicFleetConfiguration#name}

---

##### `organization_id`<sup>Optional</sup> <a name="organization_id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

The organization ID. Resolved automatically from the provider when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.3/docs/data-sources/fleet_configuration#organization_id DataNewrelicFleetConfiguration#organization_id}

---

##### `version_entity_id`<sup>Optional</sup> <a name="version_entity_id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.versionEntityId"></a>

```python
version_entity_id: str
```

- *Type:* str

The GUID of a specific configuration version entity. Returns the content of that exact version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.3/docs/data-sources/fleet_configuration#version_entity_id DataNewrelicFleetConfiguration#version_entity_id}

---



