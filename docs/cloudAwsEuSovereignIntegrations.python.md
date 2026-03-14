# `cloudAwsEuSovereignIntegrations` Submodule <a name="`cloudAwsEuSovereignIntegrations` Submodule" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAwsEuSovereignIntegrations <a name="CloudAwsEuSovereignIntegrations" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations newrelic_cloud_aws_eu_sovereign_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_aws_eu_sovereign_integrations

cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  linked_account_id: typing.Union[int, float],
  account_id: typing.Union[int, float] = None,
  billing: CloudAwsEuSovereignIntegrationsBilling = None,
  cloudtrail: CloudAwsEuSovereignIntegrationsCloudtrail = None,
  id: str = None,
  x_ray: CloudAwsEuSovereignIntegrationsXRay = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.linkedAccountId">linked_account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the linked AWS EU Sovereign account in New Relic. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.billing">billing</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a></code> | billing block. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a></code> | cloudtrail block. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#id CloudAwsEuSovereignIntegrations#id}. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.xRay">x_ray</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a></code> | x_ray block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `linked_account_id`<sup>Required</sup> <a name="linked_account_id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.linkedAccountId"></a>

- *Type:* typing.Union[int, float]

The ID of the linked AWS EU Sovereign account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#linked_account_id CloudAwsEuSovereignIntegrations#linked_account_id}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#account_id CloudAwsEuSovereignIntegrations#account_id}

---

##### `billing`<sup>Optional</sup> <a name="billing" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.billing"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a>

billing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#billing CloudAwsEuSovereignIntegrations#billing}

---

##### `cloudtrail`<sup>Optional</sup> <a name="cloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.cloudtrail"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a>

cloudtrail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#cloudtrail CloudAwsEuSovereignIntegrations#cloudtrail}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#id CloudAwsEuSovereignIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `x_ray`<sup>Optional</sup> <a name="x_ray" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.xRay"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a>

x_ray block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#x_ray CloudAwsEuSovereignIntegrations#x_ray}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putBilling">put_billing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putCloudtrail">put_cloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putXRay">put_x_ray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetBilling">reset_billing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetCloudtrail">reset_cloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetXRay">reset_x_ray</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_billing` <a name="put_billing" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putBilling"></a>

```python
def put_billing(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putBilling.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#metrics_polling_interval CloudAwsEuSovereignIntegrations#metrics_polling_interval}

---

##### `put_cloudtrail` <a name="put_cloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putCloudtrail"></a>

```python
def put_cloudtrail(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putCloudtrail.parameter.awsRegions"></a>

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#aws_regions CloudAwsEuSovereignIntegrations#aws_regions}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putCloudtrail.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#metrics_polling_interval CloudAwsEuSovereignIntegrations#metrics_polling_interval}

---

##### `put_x_ray` <a name="put_x_ray" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putXRay"></a>

```python
def put_x_ray(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putXRay.parameter.awsRegions"></a>

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#aws_regions CloudAwsEuSovereignIntegrations#aws_regions}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putXRay.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#metrics_polling_interval CloudAwsEuSovereignIntegrations#metrics_polling_interval}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_billing` <a name="reset_billing" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetBilling"></a>

```python
def reset_billing() -> None
```

##### `reset_cloudtrail` <a name="reset_cloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetCloudtrail"></a>

```python
def reset_cloudtrail() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_x_ray` <a name="reset_x_ray" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetXRay"></a>

```python
def reset_x_ray() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudAwsEuSovereignIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isConstruct"></a>

```python
from cdktn_provider_newrelic import cloud_aws_eu_sovereign_integrations

cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformElement"></a>

```python
from cdktn_provider_newrelic import cloud_aws_eu_sovereign_integrations

cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformResource"></a>

```python
from cdktn_provider_newrelic import cloud_aws_eu_sovereign_integrations

cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport"></a>

```python
from cdktn_provider_newrelic import cloud_aws_eu_sovereign_integrations

cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudAwsEuSovereignIntegrations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudAwsEuSovereignIntegrations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudAwsEuSovereignIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudAwsEuSovereignIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.billing">billing</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference">CloudAwsEuSovereignIntegrationsBillingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference">CloudAwsEuSovereignIntegrationsCloudtrailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.xRay">x_ray</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference">CloudAwsEuSovereignIntegrationsXRayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.billingInput">billing_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cloudtrailInput">cloudtrail_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.linkedAccountIdInput">linked_account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.xRayInput">x_ray_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.linkedAccountId">linked_account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `billing`<sup>Required</sup> <a name="billing" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.billing"></a>

```python
billing: CloudAwsEuSovereignIntegrationsBillingOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference">CloudAwsEuSovereignIntegrationsBillingOutputReference</a>

---

##### `cloudtrail`<sup>Required</sup> <a name="cloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cloudtrail"></a>

```python
cloudtrail: CloudAwsEuSovereignIntegrationsCloudtrailOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference">CloudAwsEuSovereignIntegrationsCloudtrailOutputReference</a>

---

##### `x_ray`<sup>Required</sup> <a name="x_ray" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.xRay"></a>

```python
x_ray: CloudAwsEuSovereignIntegrationsXRayOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference">CloudAwsEuSovereignIntegrationsXRayOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `billing_input`<sup>Optional</sup> <a name="billing_input" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.billingInput"></a>

```python
billing_input: CloudAwsEuSovereignIntegrationsBilling
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a>

---

##### `cloudtrail_input`<sup>Optional</sup> <a name="cloudtrail_input" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cloudtrailInput"></a>

```python
cloudtrail_input: CloudAwsEuSovereignIntegrationsCloudtrail
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `linked_account_id_input`<sup>Optional</sup> <a name="linked_account_id_input" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.linkedAccountIdInput"></a>

```python
linked_account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `x_ray_input`<sup>Optional</sup> <a name="x_ray_input" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.xRayInput"></a>

```python
x_ray_input: CloudAwsEuSovereignIntegrationsXRay
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `linked_account_id`<sup>Required</sup> <a name="linked_account_id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.linkedAccountId"></a>

```python
linked_account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAwsEuSovereignIntegrationsBilling <a name="CloudAwsEuSovereignIntegrationsBilling" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_aws_eu_sovereign_integrations

cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#metrics_polling_interval CloudAwsEuSovereignIntegrations#metrics_polling_interval}

---

### CloudAwsEuSovereignIntegrationsCloudtrail <a name="CloudAwsEuSovereignIntegrationsCloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_aws_eu_sovereign_integrations

cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#aws_regions CloudAwsEuSovereignIntegrations#aws_regions}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#metrics_polling_interval CloudAwsEuSovereignIntegrations#metrics_polling_interval}

---

### CloudAwsEuSovereignIntegrationsConfig <a name="CloudAwsEuSovereignIntegrationsConfig" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_aws_eu_sovereign_integrations

cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  linked_account_id: typing.Union[int, float],
  account_id: typing.Union[int, float] = None,
  billing: CloudAwsEuSovereignIntegrationsBilling = None,
  cloudtrail: CloudAwsEuSovereignIntegrationsCloudtrail = None,
  id: str = None,
  x_ray: CloudAwsEuSovereignIntegrationsXRay = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.linkedAccountId">linked_account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the linked AWS EU Sovereign account in New Relic. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.billing">billing</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a></code> | billing block. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a></code> | cloudtrail block. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#id CloudAwsEuSovereignIntegrations#id}. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.xRay">x_ray</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a></code> | x_ray block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `linked_account_id`<sup>Required</sup> <a name="linked_account_id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.linkedAccountId"></a>

```python
linked_account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the linked AWS EU Sovereign account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#linked_account_id CloudAwsEuSovereignIntegrations#linked_account_id}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#account_id CloudAwsEuSovereignIntegrations#account_id}

---

##### `billing`<sup>Optional</sup> <a name="billing" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.billing"></a>

```python
billing: CloudAwsEuSovereignIntegrationsBilling
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a>

billing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#billing CloudAwsEuSovereignIntegrations#billing}

---

##### `cloudtrail`<sup>Optional</sup> <a name="cloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.cloudtrail"></a>

```python
cloudtrail: CloudAwsEuSovereignIntegrationsCloudtrail
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a>

cloudtrail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#cloudtrail CloudAwsEuSovereignIntegrations#cloudtrail}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#id CloudAwsEuSovereignIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `x_ray`<sup>Optional</sup> <a name="x_ray" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.xRay"></a>

```python
x_ray: CloudAwsEuSovereignIntegrationsXRay
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a>

x_ray block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#x_ray CloudAwsEuSovereignIntegrations#x_ray}

---

### CloudAwsEuSovereignIntegrationsXRay <a name="CloudAwsEuSovereignIntegrationsXRay" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_aws_eu_sovereign_integrations

cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay(
  aws_regions: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#aws_regions CloudAwsEuSovereignIntegrations#aws_regions}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_integrations#metrics_polling_interval CloudAwsEuSovereignIntegrations#metrics_polling_interval}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAwsEuSovereignIntegrationsBillingOutputReference <a name="CloudAwsEuSovereignIntegrationsBillingOutputReference" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_aws_eu_sovereign_integrations

cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsEuSovereignIntegrationsBilling
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a>

---


### CloudAwsEuSovereignIntegrationsCloudtrailOutputReference <a name="CloudAwsEuSovereignIntegrationsCloudtrailOutputReference" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_aws_eu_sovereign_integrations

cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsEuSovereignIntegrationsCloudtrail
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a>

---


### CloudAwsEuSovereignIntegrationsXRayOutputReference <a name="CloudAwsEuSovereignIntegrationsXRayOutputReference" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_aws_eu_sovereign_integrations

cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.internalValue"></a>

```python
internal_value: CloudAwsEuSovereignIntegrationsXRay
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a>

---



