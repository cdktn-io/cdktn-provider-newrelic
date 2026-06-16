/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.93.1/docs/data-sources/fleet_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataNewrelicFleetConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The GUID of the fleet configuration entity. Returns the content of the latest version. Populated automatically when looking up by version_entity_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.1/docs/data-sources/fleet_configuration#configuration_id DataNewrelicFleetConfiguration#configuration_id}
  */
  readonly configurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.1/docs/data-sources/fleet_configuration#id DataNewrelicFleetConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the fleet configuration. The first matching configuration is returned. Returns the content of its latest version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.1/docs/data-sources/fleet_configuration#name DataNewrelicFleetConfiguration#name}
  */
  readonly name?: string;
  /**
  * The organization ID. Resolved automatically from the provider when omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.1/docs/data-sources/fleet_configuration#organization_id DataNewrelicFleetConfiguration#organization_id}
  */
  readonly organizationId?: string;
  /**
  * The GUID of a specific configuration version entity. Returns the content of that exact version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.1/docs/data-sources/fleet_configuration#version_entity_id DataNewrelicFleetConfiguration#version_entity_id}
  */
  readonly versionEntityId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.1/docs/data-sources/fleet_configuration newrelic_fleet_configuration}
*/
export class DataNewrelicFleetConfiguration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_fleet_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataNewrelicFleetConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNewrelicFleetConfiguration to import
  * @param importFromId The id of the existing DataNewrelicFleetConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.1/docs/data-sources/fleet_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNewrelicFleetConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_fleet_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.1/docs/data-sources/fleet_configuration newrelic_fleet_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNewrelicFleetConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNewrelicFleetConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'newrelic_fleet_configuration',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.93.1',
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
    this._configurationId = config.configurationId;
    this._id = config.id;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._versionEntityId = config.versionEntityId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_content - computed: true, optional: false, required: false
  public get configurationContent() {
    return this.getStringAttribute('configuration_content');
  }

  // configuration_id - computed: true, optional: true, required: false
  private _configurationId?: string; 
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }
  public set configurationId(value: string) {
    this._configurationId = value;
  }
  public resetConfigurationId() {
    this._configurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationIdInput() {
    return this._configurationId;
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

  // latest_version_entity_id - computed: true, optional: false, required: false
  public get latestVersionEntityId() {
    return this.getStringAttribute('latest_version_entity_id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // organization_id - computed: true, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // version_entity_id - computed: false, optional: true, required: false
  private _versionEntityId?: string; 
  public get versionEntityId() {
    return this.getStringAttribute('version_entity_id');
  }
  public set versionEntityId(value: string) {
    this._versionEntityId = value;
  }
  public resetVersionEntityId() {
    this._versionEntityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionEntityIdInput() {
    return this._versionEntityId;
  }

  // version_entity_ids - computed: true, optional: false, required: false
  public get versionEntityIds() {
    return this.getListAttribute('version_entity_ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_id: cdktn.stringToTerraform(this._configurationId),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      organization_id: cdktn.stringToTerraform(this._organizationId),
      version_entity_id: cdktn.stringToTerraform(this._versionEntityId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_id: {
        value: cdktn.stringToHclTerraform(this._configurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktn.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_entity_id: {
        value: cdktn.stringToHclTerraform(this._versionEntityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
