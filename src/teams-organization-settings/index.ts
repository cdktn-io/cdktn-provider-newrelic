/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TeamsOrganizationSettingsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether tag-based entity discovery is enabled. When true, entities with a matching tag are automatically assigned to teams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#discovery_enabled TeamsOrganizationSettings#discovery_enabled}
  */
  readonly discoveryEnabled?: boolean | cdktn.IResolvable;
  /**
  * Tag keys used for entity discovery (e.g. ["team"]). Entities with these tags are auto-assigned to the team whose name or alias matches the tag value. Must contain at least one key when declared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#discovery_tag_keys TeamsOrganizationSettings#discovery_tag_keys}
  */
  readonly discoveryTagKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#id TeamsOrganizationSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether automatic team creation from IdP groups is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#sync_groups_enabled TeamsOrganizationSettings#sync_groups_enabled}
  */
  readonly syncGroupsEnabled?: boolean | cdktn.IResolvable;
  /**
  * hierarchy_levels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#hierarchy_levels TeamsOrganizationSettings#hierarchy_levels}
  */
  readonly hierarchyLevels?: TeamsOrganizationSettingsHierarchyLevels[] | cdktn.IResolvable;
  /**
  * sync_group_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#sync_group_rules TeamsOrganizationSettings#sync_group_rules}
  */
  readonly syncGroupRules?: TeamsOrganizationSettingsSyncGroupRules;
}
export interface TeamsOrganizationSettingsHierarchyLevels {
  /**
  * GUID of the hierarchy level entity. Obtain from the newrelic_teams_hierarchy_levels data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#id TeamsOrganizationSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Display name of this hierarchy level (e.g. 'Division', 'Squad'). Renaming here updates the entity in the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#name TeamsOrganizationSettings#name}
  */
  readonly name: string;
}

export function teamsOrganizationSettingsHierarchyLevelsToTerraform(struct?: TeamsOrganizationSettingsHierarchyLevels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function teamsOrganizationSettingsHierarchyLevelsToHclTerraform(struct?: TeamsOrganizationSettingsHierarchyLevels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamsOrganizationSettingsHierarchyLevelsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TeamsOrganizationSettingsHierarchyLevels | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsOrganizationSettingsHierarchyLevels | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class TeamsOrganizationSettingsHierarchyLevelsList extends cdktn.ComplexList {
  public internalValue? : TeamsOrganizationSettingsHierarchyLevels[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TeamsOrganizationSettingsHierarchyLevelsOutputReference {
    return new TeamsOrganizationSettingsHierarchyLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeamsOrganizationSettingsSyncGroupRulesConditions {
  /**
  * Match type: STARTS_WITH, ENDS_WITH, or CONTAINS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#type TeamsOrganizationSettings#type}
  */
  readonly type: string;
  /**
  * The string to match against the group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#value TeamsOrganizationSettings#value}
  */
  readonly value: string;
}

export function teamsOrganizationSettingsSyncGroupRulesConditionsToTerraform(struct?: TeamsOrganizationSettingsSyncGroupRulesConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function teamsOrganizationSettingsSyncGroupRulesConditionsToHclTerraform(struct?: TeamsOrganizationSettingsSyncGroupRulesConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TeamsOrganizationSettingsSyncGroupRulesConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsOrganizationSettingsSyncGroupRulesConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TeamsOrganizationSettingsSyncGroupRulesConditionsList extends cdktn.ComplexList {
  public internalValue? : TeamsOrganizationSettingsSyncGroupRulesConditions[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference {
    return new TeamsOrganizationSettingsSyncGroupRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeamsOrganizationSettingsSyncGroupRules {
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#conditions TeamsOrganizationSettings#conditions}
  */
  readonly conditions: TeamsOrganizationSettingsSyncGroupRulesConditions[] | cdktn.IResolvable;
}

export function teamsOrganizationSettingsSyncGroupRulesToTerraform(struct?: TeamsOrganizationSettingsSyncGroupRulesOutputReference | TeamsOrganizationSettingsSyncGroupRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    conditions: cdktn.listMapper(teamsOrganizationSettingsSyncGroupRulesConditionsToTerraform, true)(struct!.conditions),
  }
}


export function teamsOrganizationSettingsSyncGroupRulesToHclTerraform(struct?: TeamsOrganizationSettingsSyncGroupRulesOutputReference | TeamsOrganizationSettingsSyncGroupRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    conditions: {
      value: cdktn.listMapperHcl(teamsOrganizationSettingsSyncGroupRulesConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "TeamsOrganizationSettingsSyncGroupRulesConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamsOrganizationSettingsSyncGroupRulesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsOrganizationSettingsSyncGroupRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsOrganizationSettingsSyncGroupRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditions.internalValue = value.conditions;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new TeamsOrganizationSettingsSyncGroupRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: TeamsOrganizationSettingsSyncGroupRulesConditions[] | cdktn.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings newrelic_teams_organization_settings}
*/
export class TeamsOrganizationSettings extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_teams_organization_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TeamsOrganizationSettings resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamsOrganizationSettings to import
  * @param importFromId The id of the existing TeamsOrganizationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamsOrganizationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_teams_organization_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.101.10/docs/resources/teams_organization_settings newrelic_teams_organization_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamsOrganizationSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TeamsOrganizationSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'newrelic_teams_organization_settings',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.101.10',
        providerVersionConstraint: '~> 3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._discoveryEnabled = config.discoveryEnabled;
    this._discoveryTagKeys = config.discoveryTagKeys;
    this._id = config.id;
    this._syncGroupsEnabled = config.syncGroupsEnabled;
    this._hierarchyLevels.internalValue = config.hierarchyLevels;
    this._syncGroupRules.internalValue = config.syncGroupRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // discovery_enabled - computed: true, optional: true, required: false
  private _discoveryEnabled?: boolean | cdktn.IResolvable; 
  public get discoveryEnabled() {
    return this.getBooleanAttribute('discovery_enabled');
  }
  public set discoveryEnabled(value: boolean | cdktn.IResolvable) {
    this._discoveryEnabled = value;
  }
  public resetDiscoveryEnabled() {
    this._discoveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryEnabledInput() {
    return this._discoveryEnabled;
  }

  // discovery_tag_keys - computed: true, optional: true, required: false
  private _discoveryTagKeys?: string[]; 
  public get discoveryTagKeys() {
    return cdktn.Fn.tolist(this.getListAttribute('discovery_tag_keys'));
  }
  public set discoveryTagKeys(value: string[]) {
    this._discoveryTagKeys = value;
  }
  public resetDiscoveryTagKeys() {
    this._discoveryTagKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryTagKeysInput() {
    return this._discoveryTagKeys;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // sync_groups_enabled - computed: true, optional: true, required: false
  private _syncGroupsEnabled?: boolean | cdktn.IResolvable; 
  public get syncGroupsEnabled() {
    return this.getBooleanAttribute('sync_groups_enabled');
  }
  public set syncGroupsEnabled(value: boolean | cdktn.IResolvable) {
    this._syncGroupsEnabled = value;
  }
  public resetSyncGroupsEnabled() {
    this._syncGroupsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncGroupsEnabledInput() {
    return this._syncGroupsEnabled;
  }

  // hierarchy_levels - computed: false, optional: true, required: false
  private _hierarchyLevels = new TeamsOrganizationSettingsHierarchyLevelsList(this, "hierarchy_levels", true);
  public get hierarchyLevels() {
    return this._hierarchyLevels;
  }
  public putHierarchyLevels(value: TeamsOrganizationSettingsHierarchyLevels[] | cdktn.IResolvable) {
    this._hierarchyLevels.internalValue = value;
  }
  public resetHierarchyLevels() {
    this._hierarchyLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyLevelsInput() {
    return this._hierarchyLevels.internalValue;
  }

  // sync_group_rules - computed: false, optional: true, required: false
  private _syncGroupRules = new TeamsOrganizationSettingsSyncGroupRulesOutputReference(this, "sync_group_rules");
  public get syncGroupRules() {
    return this._syncGroupRules;
  }
  public putSyncGroupRules(value: TeamsOrganizationSettingsSyncGroupRules) {
    this._syncGroupRules.internalValue = value;
  }
  public resetSyncGroupRules() {
    this._syncGroupRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncGroupRulesInput() {
    return this._syncGroupRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      discovery_enabled: cdktn.booleanToTerraform(this._discoveryEnabled),
      discovery_tag_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(this._discoveryTagKeys),
      id: cdktn.stringToTerraform(this._id),
      sync_groups_enabled: cdktn.booleanToTerraform(this._syncGroupsEnabled),
      hierarchy_levels: cdktn.listMapper(teamsOrganizationSettingsHierarchyLevelsToTerraform, true)(this._hierarchyLevels.internalValue),
      sync_group_rules: teamsOrganizationSettingsSyncGroupRulesToTerraform(this._syncGroupRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      discovery_enabled: {
        value: cdktn.booleanToHclTerraform(this._discoveryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      discovery_tag_keys: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._discoveryTagKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_groups_enabled: {
        value: cdktn.booleanToHclTerraform(this._syncGroupsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hierarchy_levels: {
        value: cdktn.listMapperHcl(teamsOrganizationSettingsHierarchyLevelsToHclTerraform, true)(this._hierarchyLevels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TeamsOrganizationSettingsHierarchyLevelsList",
      },
      sync_group_rules: {
        value: teamsOrganizationSettingsSyncGroupRulesToHclTerraform(this._syncGroupRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamsOrganizationSettingsSyncGroupRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
