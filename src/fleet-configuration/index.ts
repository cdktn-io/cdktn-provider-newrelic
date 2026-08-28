/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/fleet_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FleetConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The type of agent this configuration is for. Allowed values: NRInfra, NRDOT, FluentBit, NRPrometheusAgent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/fleet_configuration#agent_type FleetConfiguration#agent_type}
  */
  readonly agentType: string;
  /**
  * The configuration content (YAML or JSON). Use file() to load from a file. Each change to this field creates a new immutable version on the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/fleet_configuration#configuration_content FleetConfiguration#configuration_content}
  */
  readonly configurationContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/fleet_configuration#id FleetConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of entities this configuration manages. Allowed values: HOST, KUBERNETESCLUSTER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/fleet_configuration#managed_entity_type FleetConfiguration#managed_entity_type}
  */
  readonly managedEntityType: string;
  /**
  * The name of the configuration. Changing this forces resource recreation because the API does not support renaming.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/fleet_configuration#name FleetConfiguration#name}
  */
  readonly name: string;
  /**
  * The operating system this configuration targets. Required for HOST configurations. Allowed values: LINUX, WINDOWS. Must not be set for KUBERNETESCLUSTER configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/fleet_configuration#operating_system FleetConfiguration#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * The organization ID. Auto-fetched from the account if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/fleet_configuration#organization_id FleetConfiguration#organization_id}
  */
  readonly organizationId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/fleet_configuration newrelic_fleet_configuration}
*/
export class FleetConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_fleet_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FleetConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetConfiguration to import
  * @param importFromId The id of the existing FleetConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/fleet_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_fleet_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.4/docs/resources/fleet_configuration newrelic_fleet_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: FleetConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_fleet_configuration',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.96.4',
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
    this._agentType = config.agentType;
    this._configurationContent = config.configurationContent;
    this._id = config.id;
    this._managedEntityType = config.managedEntityType;
    this._name = config.name;
    this._operatingSystem = config.operatingSystem;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_type - computed: false, optional: false, required: true
  private _agentType?: string; 
  public get agentType() {
    return this.getStringAttribute('agent_type');
  }
  public set agentType(value: string) {
    this._agentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentTypeInput() {
    return this._agentType;
  }

  // configuration_content - computed: false, optional: false, required: true
  private _configurationContent?: string; 
  public get configurationContent() {
    return this.getStringAttribute('configuration_content');
  }
  public set configurationContent(value: string) {
    this._configurationContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationContentInput() {
    return this._configurationContent;
  }

  // configuration_id - computed: true, optional: false, required: false
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
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

  // latest_version_number - computed: true, optional: false, required: false
  public get latestVersionNumber() {
    return this.getNumberAttribute('latest_version_number');
  }

  // managed_entity_type - computed: false, optional: false, required: true
  private _managedEntityType?: string; 
  public get managedEntityType() {
    return this.getStringAttribute('managed_entity_type');
  }
  public set managedEntityType(value: string) {
    this._managedEntityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedEntityTypeInput() {
    return this._managedEntityType;
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

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
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

  // total_versions - computed: true, optional: false, required: false
  public get totalVersions() {
    return this.getNumberAttribute('total_versions');
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
      agent_type: cdktn.stringToTerraform(this._agentType),
      configuration_content: cdktn.stringToTerraform(this._configurationContent),
      id: cdktn.stringToTerraform(this._id),
      managed_entity_type: cdktn.stringToTerraform(this._managedEntityType),
      name: cdktn.stringToTerraform(this._name),
      operating_system: cdktn.stringToTerraform(this._operatingSystem),
      organization_id: cdktn.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_type: {
        value: cdktn.stringToHclTerraform(this._agentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_content: {
        value: cdktn.stringToHclTerraform(this._configurationContent),
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
      managed_entity_type: {
        value: cdktn.stringToHclTerraform(this._managedEntityType),
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
      operating_system: {
        value: cdktn.stringToHclTerraform(this._operatingSystem),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
