# `dataNewrelicNotebook` Submodule <a name="`dataNewrelicNotebook` Submodule" id="@cdktn/provider-newrelic.dataNewrelicNotebook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicNotebook <a name="DataNewrelicNotebook" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.98.0/docs/data-sources/notebook newrelic_notebook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer"></a>

```python
from cdktn_provider_newrelic import data_newrelic_notebook

dataNewrelicNotebook.DataNewrelicNotebook(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  guid: str,
  fetch_content: bool | IResolvable = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.guid">guid</a></code> | <code>str</code> | The unique entity identifier (GUID) of the notebook. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.fetchContent">fetch_content</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, the full notebook body is fetched from the Blob Storage API and stored in the `content` attribute. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.98.0/docs/data-sources/notebook#id DataNewrelicNotebook#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.guid"></a>

- *Type:* str

The unique entity identifier (GUID) of the notebook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.98.0/docs/data-sources/notebook#guid DataNewrelicNotebook#guid}

---

##### `fetch_content`<sup>Optional</sup> <a name="fetch_content" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.fetchContent"></a>

- *Type:* bool | cdktn.IResolvable

When true, the full notebook body is fetched from the Blob Storage API and stored in the `content` attribute.

When false (default), only NerdGraph metadata (title, organization_id, blob_id) is retrieved, which is faster and avoids an extra API call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.98.0/docs/data-sources/notebook#fetch_content DataNewrelicNotebook#fetch_content}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.98.0/docs/data-sources/notebook#id DataNewrelicNotebook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.resetFetchContent">reset_fetch_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_fetch_content` <a name="reset_fetch_content" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.resetFetchContent"></a>

```python
def reset_fetch_content() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataNewrelicNotebook resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.isConstruct"></a>

```python
from cdktn_provider_newrelic import data_newrelic_notebook

dataNewrelicNotebook.DataNewrelicNotebook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.isTerraformElement"></a>

```python
from cdktn_provider_newrelic import data_newrelic_notebook

dataNewrelicNotebook.DataNewrelicNotebook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.isTerraformDataSource"></a>

```python
from cdktn_provider_newrelic import data_newrelic_notebook

dataNewrelicNotebook.DataNewrelicNotebook.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.generateConfigForImport"></a>

```python
from cdktn_provider_newrelic import data_newrelic_notebook

dataNewrelicNotebook.DataNewrelicNotebook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataNewrelicNotebook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataNewrelicNotebook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataNewrelicNotebook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.98.0/docs/data-sources/notebook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataNewrelicNotebook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.blobId">blob_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.fetchContentInput">fetch_content_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.guidInput">guid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.fetchContent">fetch_content</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.guid">guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `blob_id`<sup>Required</sup> <a name="blob_id" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.blobId"></a>

```python
blob_id: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `fetch_content_input`<sup>Optional</sup> <a name="fetch_content_input" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.fetchContentInput"></a>

```python
fetch_content_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `guid_input`<sup>Optional</sup> <a name="guid_input" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.guidInput"></a>

```python
guid_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `fetch_content`<sup>Required</sup> <a name="fetch_content" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.fetchContent"></a>

```python
fetch_content: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.guid"></a>

```python
guid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicNotebookConfig <a name="DataNewrelicNotebookConfig" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig.Initializer"></a>

```python
from cdktn_provider_newrelic import data_newrelic_notebook

dataNewrelicNotebook.DataNewrelicNotebookConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  guid: str,
  fetch_content: bool | IResolvable = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig.property.guid">guid</a></code> | <code>str</code> | The unique entity identifier (GUID) of the notebook. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig.property.fetchContent">fetch_content</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, the full notebook body is fetched from the Blob Storage API and stored in the `content` attribute. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.98.0/docs/data-sources/notebook#id DataNewrelicNotebook#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig.property.guid"></a>

```python
guid: str
```

- *Type:* str

The unique entity identifier (GUID) of the notebook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.98.0/docs/data-sources/notebook#guid DataNewrelicNotebook#guid}

---

##### `fetch_content`<sup>Optional</sup> <a name="fetch_content" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig.property.fetchContent"></a>

```python
fetch_content: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, the full notebook body is fetched from the Blob Storage API and stored in the `content` attribute.

When false (default), only NerdGraph metadata (title, organization_id, blob_id) is retrieved, which is faster and avoids an extra API call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.98.0/docs/data-sources/notebook#fetch_content DataNewrelicNotebook#fetch_content}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicNotebook.DataNewrelicNotebookConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.98.0/docs/data-sources/notebook#id DataNewrelicNotebook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



