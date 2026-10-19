# `dataNewrelicTeamsHierarchyLevels` Submodule <a name="`dataNewrelicTeamsHierarchyLevels` Submodule" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicTeamsHierarchyLevels <a name="DataNewrelicTeamsHierarchyLevels" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/data-sources/teams_hierarchy_levels newrelic_teams_hierarchy_levels}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer"></a>

```python
from cdktn_provider_newrelic import data_newrelic_teams_hierarchy_levels

dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/data-sources/teams_hierarchy_levels#id DataNewrelicTeamsHierarchyLevels#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/data-sources/teams_hierarchy_levels#id DataNewrelicTeamsHierarchyLevels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataNewrelicTeamsHierarchyLevels resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.isConstruct"></a>

```python
from cdktn_provider_newrelic import data_newrelic_teams_hierarchy_levels

dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.isTerraformElement"></a>

```python
from cdktn_provider_newrelic import data_newrelic_teams_hierarchy_levels

dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.isTerraformDataSource"></a>

```python
from cdktn_provider_newrelic import data_newrelic_teams_hierarchy_levels

dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.generateConfigForImport"></a>

```python
from cdktn_provider_newrelic import data_newrelic_teams_hierarchy_levels

dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataNewrelicTeamsHierarchyLevels resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataNewrelicTeamsHierarchyLevels to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataNewrelicTeamsHierarchyLevels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/data-sources/teams_hierarchy_levels#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataNewrelicTeamsHierarchyLevels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.levels">levels</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList">DataNewrelicTeamsHierarchyLevelsLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `levels`<sup>Required</sup> <a name="levels" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.levels"></a>

```python
levels: DataNewrelicTeamsHierarchyLevelsLevelsList
```

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList">DataNewrelicTeamsHierarchyLevelsLevelsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevels.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicTeamsHierarchyLevelsConfig <a name="DataNewrelicTeamsHierarchyLevelsConfig" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.Initializer"></a>

```python
from cdktn_provider_newrelic import data_newrelic_teams_hierarchy_levels

dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/data-sources/teams_hierarchy_levels#id DataNewrelicTeamsHierarchyLevels#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.1/docs/data-sources/teams_hierarchy_levels#id DataNewrelicTeamsHierarchyLevels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataNewrelicTeamsHierarchyLevelsLevels <a name="DataNewrelicTeamsHierarchyLevelsLevels" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevels.Initializer"></a>

```python
from cdktn_provider_newrelic import data_newrelic_teams_hierarchy_levels

dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevels()
```


## Classes <a name="Classes" id="Classes"></a>

### DataNewrelicTeamsHierarchyLevelsLevelsList <a name="DataNewrelicTeamsHierarchyLevelsLevelsList" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.Initializer"></a>

```python
from cdktn_provider_newrelic import data_newrelic_teams_hierarchy_levels

dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataNewrelicTeamsHierarchyLevelsLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataNewrelicTeamsHierarchyLevelsLevelsOutputReference <a name="DataNewrelicTeamsHierarchyLevelsLevelsOutputReference" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import data_newrelic_teams_hierarchy_levels

dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevels">DataNewrelicTeamsHierarchyLevelsLevels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevelsOutputReference.property.internalValue"></a>

```python
internal_value: DataNewrelicTeamsHierarchyLevelsLevels
```

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicTeamsHierarchyLevels.DataNewrelicTeamsHierarchyLevelsLevels">DataNewrelicTeamsHierarchyLevelsLevels</a>

---



