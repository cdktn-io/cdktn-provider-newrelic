# `teamsOrganizationSettings` Submodule <a name="`teamsOrganizationSettings` Submodule" id="@cdktn/provider-newrelic.teamsOrganizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamsOrganizationSettings <a name="TeamsOrganizationSettings" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings newrelic_teams_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer"></a>

```python
from cdktn_provider_newrelic import teams_organization_settings

teamsOrganizationSettings.TeamsOrganizationSettings(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  discovery_enabled: bool | IResolvable = None,
  discovery_tag_keys: typing.List[str] = None,
  hierarchy_levels: IResolvable | typing.List[TeamsOrganizationSettingsHierarchyLevels] = None,
  id: str = None,
  sync_group_rules: TeamsOrganizationSettingsSyncGroupRules = None,
  sync_groups_enabled: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.discoveryEnabled">discovery_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether tag-based entity discovery is enabled. When true, entities with a matching tag are automatically assigned to teams. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.discoveryTagKeys">discovery_tag_keys</a></code> | <code>typing.List[str]</code> | Tag keys used for entity discovery (e.g. ["team"]). Entities with these tags are auto-assigned to the team whose name or alias matches the tag value. Must contain at least one key when declared. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.hierarchyLevels">hierarchy_levels</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>]</code> | hierarchy_levels block. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#id TeamsOrganizationSettings#id}. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.syncGroupRules">sync_group_rules</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a></code> | sync_group_rules block. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.syncGroupsEnabled">sync_groups_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether automatic team creation from IdP groups is enabled. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `discovery_enabled`<sup>Optional</sup> <a name="discovery_enabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.discoveryEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether tag-based entity discovery is enabled. When true, entities with a matching tag are automatically assigned to teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#discovery_enabled TeamsOrganizationSettings#discovery_enabled}

---

##### `discovery_tag_keys`<sup>Optional</sup> <a name="discovery_tag_keys" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.discoveryTagKeys"></a>

- *Type:* typing.List[str]

Tag keys used for entity discovery (e.g. ["team"]). Entities with these tags are auto-assigned to the team whose name or alias matches the tag value. Must contain at least one key when declared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#discovery_tag_keys TeamsOrganizationSettings#discovery_tag_keys}

---

##### `hierarchy_levels`<sup>Optional</sup> <a name="hierarchy_levels" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.hierarchyLevels"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>]

hierarchy_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#hierarchy_levels TeamsOrganizationSettings#hierarchy_levels}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#id TeamsOrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sync_group_rules`<sup>Optional</sup> <a name="sync_group_rules" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.syncGroupRules"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a>

sync_group_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#sync_group_rules TeamsOrganizationSettings#sync_group_rules}

---

##### `sync_groups_enabled`<sup>Optional</sup> <a name="sync_groups_enabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.Initializer.parameter.syncGroupsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether automatic team creation from IdP groups is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#sync_groups_enabled TeamsOrganizationSettings#sync_groups_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putHierarchyLevels">put_hierarchy_levels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putSyncGroupRules">put_sync_group_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetDiscoveryEnabled">reset_discovery_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetDiscoveryTagKeys">reset_discovery_tag_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetHierarchyLevels">reset_hierarchy_levels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetSyncGroupRules">reset_sync_group_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetSyncGroupsEnabled">reset_sync_groups_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_hierarchy_levels` <a name="put_hierarchy_levels" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putHierarchyLevels"></a>

```python
def put_hierarchy_levels(
  value: IResolvable | typing.List[TeamsOrganizationSettingsHierarchyLevels]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putHierarchyLevels.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>]

---

##### `put_sync_group_rules` <a name="put_sync_group_rules" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putSyncGroupRules"></a>

```python
def put_sync_group_rules(
  conditions: IResolvable | typing.List[TeamsOrganizationSettingsSyncGroupRulesConditions]
) -> None
```

###### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.putSyncGroupRules.parameter.conditions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#conditions TeamsOrganizationSettings#conditions}

---

##### `reset_discovery_enabled` <a name="reset_discovery_enabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetDiscoveryEnabled"></a>

```python
def reset_discovery_enabled() -> None
```

##### `reset_discovery_tag_keys` <a name="reset_discovery_tag_keys" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetDiscoveryTagKeys"></a>

```python
def reset_discovery_tag_keys() -> None
```

##### `reset_hierarchy_levels` <a name="reset_hierarchy_levels" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetHierarchyLevels"></a>

```python
def reset_hierarchy_levels() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_sync_group_rules` <a name="reset_sync_group_rules" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetSyncGroupRules"></a>

```python
def reset_sync_group_rules() -> None
```

##### `reset_sync_groups_enabled` <a name="reset_sync_groups_enabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.resetSyncGroupsEnabled"></a>

```python
def reset_sync_groups_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a TeamsOrganizationSettings resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isConstruct"></a>

```python
from cdktn_provider_newrelic import teams_organization_settings

teamsOrganizationSettings.TeamsOrganizationSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformElement"></a>

```python
from cdktn_provider_newrelic import teams_organization_settings

teamsOrganizationSettings.TeamsOrganizationSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformResource"></a>

```python
from cdktn_provider_newrelic import teams_organization_settings

teamsOrganizationSettings.TeamsOrganizationSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport"></a>

```python
from cdktn_provider_newrelic import teams_organization_settings

teamsOrganizationSettings.TeamsOrganizationSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a TeamsOrganizationSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TeamsOrganizationSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TeamsOrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TeamsOrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.hierarchyLevels">hierarchy_levels</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList">TeamsOrganizationSettingsHierarchyLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupRules">sync_group_rules</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference">TeamsOrganizationSettingsSyncGroupRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryEnabledInput">discovery_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryTagKeysInput">discovery_tag_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.hierarchyLevelsInput">hierarchy_levels_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupRulesInput">sync_group_rules_input</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupsEnabledInput">sync_groups_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryEnabled">discovery_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryTagKeys">discovery_tag_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupsEnabled">sync_groups_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hierarchy_levels`<sup>Required</sup> <a name="hierarchy_levels" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.hierarchyLevels"></a>

```python
hierarchy_levels: TeamsOrganizationSettingsHierarchyLevelsList
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList">TeamsOrganizationSettingsHierarchyLevelsList</a>

---

##### `sync_group_rules`<sup>Required</sup> <a name="sync_group_rules" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupRules"></a>

```python
sync_group_rules: TeamsOrganizationSettingsSyncGroupRulesOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference">TeamsOrganizationSettingsSyncGroupRulesOutputReference</a>

---

##### `discovery_enabled_input`<sup>Optional</sup> <a name="discovery_enabled_input" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryEnabledInput"></a>

```python
discovery_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `discovery_tag_keys_input`<sup>Optional</sup> <a name="discovery_tag_keys_input" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryTagKeysInput"></a>

```python
discovery_tag_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hierarchy_levels_input`<sup>Optional</sup> <a name="hierarchy_levels_input" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.hierarchyLevelsInput"></a>

```python
hierarchy_levels_input: IResolvable | typing.List[TeamsOrganizationSettingsHierarchyLevels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `sync_group_rules_input`<sup>Optional</sup> <a name="sync_group_rules_input" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupRulesInput"></a>

```python
sync_group_rules_input: TeamsOrganizationSettingsSyncGroupRules
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a>

---

##### `sync_groups_enabled_input`<sup>Optional</sup> <a name="sync_groups_enabled_input" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupsEnabledInput"></a>

```python
sync_groups_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `discovery_enabled`<sup>Required</sup> <a name="discovery_enabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryEnabled"></a>

```python
discovery_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `discovery_tag_keys`<sup>Required</sup> <a name="discovery_tag_keys" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.discoveryTagKeys"></a>

```python
discovery_tag_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `sync_groups_enabled`<sup>Required</sup> <a name="sync_groups_enabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.syncGroupsEnabled"></a>

```python
sync_groups_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TeamsOrganizationSettingsConfig <a name="TeamsOrganizationSettingsConfig" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.Initializer"></a>

```python
from cdktn_provider_newrelic import teams_organization_settings

teamsOrganizationSettings.TeamsOrganizationSettingsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  discovery_enabled: bool | IResolvable = None,
  discovery_tag_keys: typing.List[str] = None,
  hierarchy_levels: IResolvable | typing.List[TeamsOrganizationSettingsHierarchyLevels] = None,
  id: str = None,
  sync_group_rules: TeamsOrganizationSettingsSyncGroupRules = None,
  sync_groups_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.discoveryEnabled">discovery_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether tag-based entity discovery is enabled. When true, entities with a matching tag are automatically assigned to teams. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.discoveryTagKeys">discovery_tag_keys</a></code> | <code>typing.List[str]</code> | Tag keys used for entity discovery (e.g. ["team"]). Entities with these tags are auto-assigned to the team whose name or alias matches the tag value. Must contain at least one key when declared. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.hierarchyLevels">hierarchy_levels</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>]</code> | hierarchy_levels block. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#id TeamsOrganizationSettings#id}. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.syncGroupRules">sync_group_rules</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a></code> | sync_group_rules block. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.syncGroupsEnabled">sync_groups_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether automatic team creation from IdP groups is enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `discovery_enabled`<sup>Optional</sup> <a name="discovery_enabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.discoveryEnabled"></a>

```python
discovery_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether tag-based entity discovery is enabled. When true, entities with a matching tag are automatically assigned to teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#discovery_enabled TeamsOrganizationSettings#discovery_enabled}

---

##### `discovery_tag_keys`<sup>Optional</sup> <a name="discovery_tag_keys" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.discoveryTagKeys"></a>

```python
discovery_tag_keys: typing.List[str]
```

- *Type:* typing.List[str]

Tag keys used for entity discovery (e.g. ["team"]). Entities with these tags are auto-assigned to the team whose name or alias matches the tag value. Must contain at least one key when declared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#discovery_tag_keys TeamsOrganizationSettings#discovery_tag_keys}

---

##### `hierarchy_levels`<sup>Optional</sup> <a name="hierarchy_levels" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.hierarchyLevels"></a>

```python
hierarchy_levels: IResolvable | typing.List[TeamsOrganizationSettingsHierarchyLevels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>]

hierarchy_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#hierarchy_levels TeamsOrganizationSettings#hierarchy_levels}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#id TeamsOrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sync_group_rules`<sup>Optional</sup> <a name="sync_group_rules" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.syncGroupRules"></a>

```python
sync_group_rules: TeamsOrganizationSettingsSyncGroupRules
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a>

sync_group_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#sync_group_rules TeamsOrganizationSettings#sync_group_rules}

---

##### `sync_groups_enabled`<sup>Optional</sup> <a name="sync_groups_enabled" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsConfig.property.syncGroupsEnabled"></a>

```python
sync_groups_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether automatic team creation from IdP groups is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#sync_groups_enabled TeamsOrganizationSettings#sync_groups_enabled}

---

### TeamsOrganizationSettingsHierarchyLevels <a name="TeamsOrganizationSettingsHierarchyLevels" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels.Initializer"></a>

```python
from cdktn_provider_newrelic import teams_organization_settings

teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels(
  id: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels.property.id">id</a></code> | <code>str</code> | GUID of the hierarchy level entity. Obtain from the newrelic_teams_hierarchy_levels data source. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels.property.name">name</a></code> | <code>str</code> | Display name of this hierarchy level (e.g. 'Division', 'Squad'). Renaming here updates the entity in the API. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels.property.id"></a>

```python
id: str
```

- *Type:* str

GUID of the hierarchy level entity. Obtain from the newrelic_teams_hierarchy_levels data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#id TeamsOrganizationSettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels.property.name"></a>

```python
name: str
```

- *Type:* str

Display name of this hierarchy level (e.g. 'Division', 'Squad'). Renaming here updates the entity in the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#name TeamsOrganizationSettings#name}

---

### TeamsOrganizationSettingsSyncGroupRules <a name="TeamsOrganizationSettingsSyncGroupRules" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules.Initializer"></a>

```python
from cdktn_provider_newrelic import teams_organization_settings

teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules(
  conditions: IResolvable | typing.List[TeamsOrganizationSettingsSyncGroupRulesConditions]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>]</code> | conditions block. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules.property.conditions"></a>

```python
conditions: IResolvable | typing.List[TeamsOrganizationSettingsSyncGroupRulesConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#conditions TeamsOrganizationSettings#conditions}

---

### TeamsOrganizationSettingsSyncGroupRulesConditions <a name="TeamsOrganizationSettingsSyncGroupRulesConditions" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions.Initializer"></a>

```python
from cdktn_provider_newrelic import teams_organization_settings

teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions(
  type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions.property.type">type</a></code> | <code>str</code> | Match type: STARTS_WITH, ENDS_WITH, or CONTAINS. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions.property.value">value</a></code> | <code>str</code> | The string to match against the group name. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions.property.type"></a>

```python
type: str
```

- *Type:* str

Match type: STARTS_WITH, ENDS_WITH, or CONTAINS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#type TeamsOrganizationSettings#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions.property.value"></a>

```python
value: str
```

- *Type:* str

The string to match against the group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#value TeamsOrganizationSettings#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamsOrganizationSettingsHierarchyLevelsList <a name="TeamsOrganizationSettingsHierarchyLevelsList" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer"></a>

```python
from cdktn_provider_newrelic import teams_organization_settings

teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TeamsOrganizationSettingsHierarchyLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TeamsOrganizationSettingsHierarchyLevels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>]

---


### TeamsOrganizationSettingsHierarchyLevelsOutputReference <a name="TeamsOrganizationSettingsHierarchyLevelsOutputReference" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import teams_organization_settings

teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevelsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TeamsOrganizationSettingsHierarchyLevels
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsHierarchyLevels">TeamsOrganizationSettingsHierarchyLevels</a>

---


### TeamsOrganizationSettingsSyncGroupRulesConditionsList <a name="TeamsOrganizationSettingsSyncGroupRulesConditionsList" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer"></a>

```python
from cdktn_provider_newrelic import teams_organization_settings

teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TeamsOrganizationSettingsSyncGroupRulesConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>]

---


### TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference <a name="TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import teams_organization_settings

teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TeamsOrganizationSettingsSyncGroupRulesConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>

---


### TeamsOrganizationSettingsSyncGroupRulesOutputReference <a name="TeamsOrganizationSettingsSyncGroupRulesOutputReference" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import teams_organization_settings

teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.putConditions">put_conditions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditions` <a name="put_conditions" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.putConditions"></a>

```python
def put_conditions(
  value: IResolvable | typing.List[TeamsOrganizationSettingsSyncGroupRulesConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList">TeamsOrganizationSettingsSyncGroupRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.conditionsInput">conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.conditions"></a>

```python
conditions: TeamsOrganizationSettingsSyncGroupRulesConditionsList
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditionsList">TeamsOrganizationSettingsSyncGroupRulesConditionsList</a>

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.conditionsInput"></a>

```python
conditions_input: IResolvable | typing.List[TeamsOrganizationSettingsSyncGroupRulesConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesConditions">TeamsOrganizationSettingsSyncGroupRulesConditions</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRulesOutputReference.property.internalValue"></a>

```python
internal_value: TeamsOrganizationSettingsSyncGroupRules
```

- *Type:* <a href="#@cdktn/provider-newrelic.teamsOrganizationSettings.TeamsOrganizationSettingsSyncGroupRules">TeamsOrganizationSettingsSyncGroupRules</a>

---



