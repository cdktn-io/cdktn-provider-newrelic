/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.87.1/docs/resources/fleet_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FleetDeploymentConfig extends cdktn.TerraformMetaArguments {
  /**
  * A description of the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.1/docs/resources/fleet_deployment#description FleetDeployment#description}
  */
  readonly description?: string;
  /**
  * The GUID of the fleet this deployment belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.1/docs/resources/fleet_deployment#fleet_id FleetDeployment#fleet_id}
  */
  readonly fleetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.1/docs/resources/fleet_deployment#id FleetDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.1/docs/resources/fleet_deployment#name FleetDeployment#name}
  */
  readonly name?: string;
  /**
  * The organization ID. Auto-fetched from the account if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.1/docs/resources/fleet_deployment#organization_id FleetDeployment#organization_id}
  */
  readonly organizationId?: string;
  /**
  * Tags for the deployment in format 'key:value1,value2'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.1/docs/resources/fleet_deployment#tags FleetDeployment#tags}
  */
  readonly tags?: string[];
  /**
  * agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.1/docs/resources/fleet_deployment#agent FleetDeployment#agent}
  */
  readonly agent?: FleetDeploymentAgent[] | cdktn.IResolvable;
}
export interface FleetDeploymentAgent {
  /**
  * The agent type. Allowed values: NRInfra, NRDOT, FluentBit, NRPrometheusAgent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.1/docs/resources/fleet_deployment#agent_type FleetDeployment#agent_type}
  */
  readonly agentType: string;
  /**
  * Configuration version entity GUID to associate with this agent in the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.1/docs/resources/fleet_deployment#configuration_version_id FleetDeployment#configuration_version_id}
  */
  readonly configurationVersionId: string;
  /**
  * The agent version to deploy (e.g. "1.58.0").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.1/docs/resources/fleet_deployment#version FleetDeployment#version}
  */
  readonly version: string;
}

export function fleetDeploymentAgentToTerraform(struct?: FleetDeploymentAgent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_type: cdktn.stringToTerraform(struct!.agentType),
    configuration_version_id: cdktn.stringToTerraform(struct!.configurationVersionId),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function fleetDeploymentAgentToHclTerraform(struct?: FleetDeploymentAgent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_type: {
      value: cdktn.stringToHclTerraform(struct!.agentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration_version_id: {
      value: cdktn.stringToHclTerraform(struct!.configurationVersionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetDeploymentAgentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FleetDeploymentAgent | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentType = this._agentType;
    }
    if (this._configurationVersionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationVersionId = this._configurationVersionId;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetDeploymentAgent | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentType = undefined;
      this._configurationVersionId = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentType = value.agentType;
      this._configurationVersionId = value.configurationVersionId;
      this._version = value.version;
    }
  }

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

  // configuration_version_id - computed: false, optional: false, required: true
  private _configurationVersionId?: string; 
  public get configurationVersionId() {
    return this.getStringAttribute('configuration_version_id');
  }
  public set configurationVersionId(value: string) {
    this._configurationVersionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationVersionIdInput() {
    return this._configurationVersionId;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class FleetDeploymentAgentList extends cdktn.ComplexList {
  public internalValue? : FleetDeploymentAgent[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FleetDeploymentAgentOutputReference {
    return new FleetDeploymentAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.1/docs/resources/fleet_deployment newrelic_fleet_deployment}
*/
export class FleetDeployment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_fleet_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FleetDeployment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetDeployment to import
  * @param importFromId The id of the existing FleetDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.1/docs/resources/fleet_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_fleet_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.1/docs/resources/fleet_deployment newrelic_fleet_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: FleetDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_fleet_deployment',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.87.1',
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
    this._description = config.description;
    this._fleetId = config.fleetId;
    this._id = config.id;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._tags = config.tags;
    this._agent.internalValue = config.agent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fleet_id - computed: false, optional: false, required: true
  private _fleetId?: string; 
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }
  public set fleetId(value: string) {
    this._fleetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetIdInput() {
    return this._fleetId;
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

  // phase - computed: true, optional: false, required: false
  public get phase() {
    return this.getStringAttribute('phase');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // agent - computed: false, optional: true, required: false
  private _agent = new FleetDeploymentAgentList(this, "agent", false);
  public get agent() {
    return this._agent;
  }
  public putAgent(value: FleetDeploymentAgent[] | cdktn.IResolvable) {
    this._agent.internalValue = value;
  }
  public resetAgent() {
    this._agent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      fleet_id: cdktn.stringToTerraform(this._fleetId),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      organization_id: cdktn.stringToTerraform(this._organizationId),
      tags: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tags),
      agent: cdktn.listMapper(fleetDeploymentAgentToTerraform, true)(this._agent.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fleet_id: {
        value: cdktn.stringToHclTerraform(this._fleetId),
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
      tags: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      agent: {
        value: cdktn.listMapperHcl(fleetDeploymentAgentToHclTerraform, true)(this._agent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetDeploymentAgentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
