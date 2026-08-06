/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/workflow_automation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WorkflowAutomationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The YAML definition of the workflow automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/workflow_automation#definition WorkflowAutomation#definition}
  */
  readonly definition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/workflow_automation#id WorkflowAutomation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the workflow automation. Must match the name in the YAML definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/workflow_automation#name WorkflowAutomation#name}
  */
  readonly name: string;
  /**
  * The scope ID (account ID for ACCOUNT scope, organization ID for ORGANIZATION scope).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/workflow_automation#scope_id WorkflowAutomation#scope_id}
  */
  readonly scopeId: string;
  /**
  * The scope type. Supported values are: ACCOUNT, ORGANIZATION.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/workflow_automation#scope_type WorkflowAutomation#scope_type}
  */
  readonly scopeType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/workflow_automation newrelic_workflow_automation}
*/
export class WorkflowAutomation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_workflow_automation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WorkflowAutomation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowAutomation to import
  * @param importFromId The id of the existing WorkflowAutomation that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/workflow_automation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowAutomation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_workflow_automation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/workflow_automation newrelic_workflow_automation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowAutomationConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowAutomationConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_workflow_automation',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.96.0',
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
    this._definition = config.definition;
    this._id = config.id;
    this._name = config.name;
    this._scopeId = config.scopeId;
    this._scopeType = config.scopeType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // definition_id - computed: true, optional: false, required: false
  public get definitionId() {
    return this.getStringAttribute('definition_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // scope_id - computed: false, optional: false, required: true
  private _scopeId?: string; 
  public get scopeId() {
    return this.getStringAttribute('scope_id');
  }
  public set scopeId(value: string) {
    this._scopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeIdInput() {
    return this._scopeId;
  }

  // scope_type - computed: false, optional: false, required: true
  private _scopeType?: string; 
  public get scopeType() {
    return this.getStringAttribute('scope_type');
  }
  public set scopeType(value: string) {
    this._scopeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeTypeInput() {
    return this._scopeType;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      definition: cdktn.stringToTerraform(this._definition),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      scope_id: cdktn.stringToTerraform(this._scopeId),
      scope_type: cdktn.stringToTerraform(this._scopeType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      definition: {
        value: cdktn.stringToHclTerraform(this._definition),
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
      scope_id: {
        value: cdktn.stringToHclTerraform(this._scopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_type: {
        value: cdktn.stringToHclTerraform(this._scopeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
