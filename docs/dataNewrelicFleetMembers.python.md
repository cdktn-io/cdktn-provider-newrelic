# `dataNewrelicFleetMembers` Submodule <a name="`dataNewrelicFleetMembers` Submodule" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicFleetMembers <a name="DataNewrelicFleetMembers" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/data-sources/fleet_members newrelic_fleet_members}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer"></a>

```python
from cdktn_provider_newrelic import data_newrelic_fleet_members

dataNewrelicFleetMembers.DataNewrelicFleetMembers(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  fleet_id: str,
  id: str = None,
  ring: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.fleetId">fleet_id</a></code> | <code>str</code> | The GUID of the fleet to list members for. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/data-sources/fleet_members#id DataNewrelicFleetMembers#id}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.ring">ring</a></code> | <code>str</code> | Filter members by ring name. If omitted, all members across all rings are returned. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.fleetId"></a>

- *Type:* str

The GUID of the fleet to list members for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/data-sources/fleet_members#fleet_id DataNewrelicFleetMembers#fleet_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/data-sources/fleet_members#id DataNewrelicFleetMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ring`<sup>Optional</sup> <a name="ring" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.ring"></a>

- *Type:* str

Filter members by ring name. If omitted, all members across all rings are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/data-sources/fleet_members#ring DataNewrelicFleetMembers#ring}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.resetRing">reset_ring</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ring` <a name="reset_ring" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.resetRing"></a>

```python
def reset_ring() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataNewrelicFleetMembers resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.isConstruct"></a>

```python
from cdktn_provider_newrelic import data_newrelic_fleet_members

dataNewrelicFleetMembers.DataNewrelicFleetMembers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.isTerraformElement"></a>

```python
from cdktn_provider_newrelic import data_newrelic_fleet_members

dataNewrelicFleetMembers.DataNewrelicFleetMembers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.isTerraformDataSource"></a>

```python
from cdktn_provider_newrelic import data_newrelic_fleet_members

dataNewrelicFleetMembers.DataNewrelicFleetMembers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.generateConfigForImport"></a>

```python
from cdktn_provider_newrelic import data_newrelic_fleet_members

dataNewrelicFleetMembers.DataNewrelicFleetMembers.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataNewrelicFleetMembers resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataNewrelicFleetMembers to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataNewrelicFleetMembers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/data-sources/fleet_members#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataNewrelicFleetMembers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.members">members</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList">DataNewrelicFleetMembersMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.fleetIdInput">fleet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.ringInput">ring_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.ring">ring</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.members"></a>

```python
members: DataNewrelicFleetMembersMembersList
```

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList">DataNewrelicFleetMembersMembersList</a>

---

##### `fleet_id_input`<sup>Optional</sup> <a name="fleet_id_input" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.fleetIdInput"></a>

```python
fleet_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ring_input`<sup>Optional</sup> <a name="ring_input" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.ringInput"></a>

```python
ring_input: str
```

- *Type:* str

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ring`<sup>Required</sup> <a name="ring" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.ring"></a>

```python
ring: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicFleetMembersConfig <a name="DataNewrelicFleetMembersConfig" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.Initializer"></a>

```python
from cdktn_provider_newrelic import data_newrelic_fleet_members

dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  fleet_id: str,
  id: str = None,
  ring: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.fleetId">fleet_id</a></code> | <code>str</code> | The GUID of the fleet to list members for. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/data-sources/fleet_members#id DataNewrelicFleetMembers#id}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.ring">ring</a></code> | <code>str</code> | Filter members by ring name. If omitted, all members across all rings are returned. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

The GUID of the fleet to list members for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/data-sources/fleet_members#fleet_id DataNewrelicFleetMembers#fleet_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/data-sources/fleet_members#id DataNewrelicFleetMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ring`<sup>Optional</sup> <a name="ring" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.ring"></a>

```python
ring: str
```

- *Type:* str

Filter members by ring name. If omitted, all members across all rings are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/data-sources/fleet_members#ring DataNewrelicFleetMembers#ring}

---

### DataNewrelicFleetMembersMembers <a name="DataNewrelicFleetMembersMembers" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembers.Initializer"></a>

```python
from cdktn_provider_newrelic import data_newrelic_fleet_members

dataNewrelicFleetMembers.DataNewrelicFleetMembersMembers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataNewrelicFleetMembersMembersList <a name="DataNewrelicFleetMembersMembersList" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.Initializer"></a>

```python
from cdktn_provider_newrelic import data_newrelic_fleet_members

dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataNewrelicFleetMembersMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataNewrelicFleetMembersMembersOutputReference <a name="DataNewrelicFleetMembersMembersOutputReference" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import data_newrelic_fleet_members

dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembers">DataNewrelicFleetMembersMembers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.internalValue"></a>

```python
internal_value: DataNewrelicFleetMembersMembers
```

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembers">DataNewrelicFleetMembersMembers</a>

---



