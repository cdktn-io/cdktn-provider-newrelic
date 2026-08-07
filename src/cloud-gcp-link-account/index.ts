/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_link_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudGcpLinkAccountConfig extends cdktn.TerraformMetaArguments {
  /**
  * accountID of newrelic account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_link_account#account_id CloudGcpLinkAccount#account_id}
  */
  readonly accountId?: number;
  /**
  * The Workload Identity Federation pool provider audience URI, used for GCP Dimensional Metrics (keyless) linking. Format: //iam.googleapis.com/projects/{PROJECT_NUMBER}/locations/global/workloadIdentityPools/{POOL_ID}/providers/{PROVIDER_ID}. Required when use_workload_identity_federation = true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_link_account#audience CloudGcpLinkAccount#audience}
  */
  readonly audience?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_link_account#id CloudGcpLinkAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of the linked account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_link_account#name CloudGcpLinkAccount#name}
  */
  readonly name: string;
  /**
  * project id of the Gcp account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_link_account#project_id CloudGcpLinkAccount#project_id}
  */
  readonly projectId: string;
  /**
  * The GCP service account email New Relic impersonates to collect metrics when linking via Workload Identity Federation (GCP Dimensional Metrics). The service account must grant the WIF pool the roles/iam.workloadIdentityUser binding. Required when use_workload_identity_federation = true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_link_account#service_account_email CloudGcpLinkAccount#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * Set to true to link this GCP account for New Relic GCP Dimensional Metrics (v2) using keyless Workload Identity Federation (WIF). When true, audience and service_account_email are required. When false (the default), the account is linked using the legacy service-account-key flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_link_account#use_workload_identity_federation CloudGcpLinkAccount#use_workload_identity_federation}
  */
  readonly useWorkloadIdentityFederation?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_link_account newrelic_cloud_gcp_link_account}
*/
export class CloudGcpLinkAccount extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_cloud_gcp_link_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudGcpLinkAccount resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudGcpLinkAccount to import
  * @param importFromId The id of the existing CloudGcpLinkAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_link_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudGcpLinkAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_cloud_gcp_link_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_link_account newrelic_cloud_gcp_link_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudGcpLinkAccountConfig
  */
  public constructor(scope: Construct, id: string, config: CloudGcpLinkAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_cloud_gcp_link_account',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.96.1',
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
    this._accountId = config.accountId;
    this._audience = config.audience;
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
    this._serviceAccountEmail = config.serviceAccountEmail;
    this._useWorkloadIdentityFederation = config.useWorkloadIdentityFederation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: number; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // service_account_email - computed: false, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // use_workload_identity_federation - computed: false, optional: true, required: false
  private _useWorkloadIdentityFederation?: boolean | cdktn.IResolvable; 
  public get useWorkloadIdentityFederation() {
    return this.getBooleanAttribute('use_workload_identity_federation');
  }
  public set useWorkloadIdentityFederation(value: boolean | cdktn.IResolvable) {
    this._useWorkloadIdentityFederation = value;
  }
  public resetUseWorkloadIdentityFederation() {
    this._useWorkloadIdentityFederation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useWorkloadIdentityFederationInput() {
    return this._useWorkloadIdentityFederation;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.numberToTerraform(this._accountId),
      audience: cdktn.stringToTerraform(this._audience),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      project_id: cdktn.stringToTerraform(this._projectId),
      service_account_email: cdktn.stringToTerraform(this._serviceAccountEmail),
      use_workload_identity_federation: cdktn.booleanToTerraform(this._useWorkloadIdentityFederation),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktn.numberToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      audience: {
        value: cdktn.stringToHclTerraform(this._audience),
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
      project_id: {
        value: cdktn.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_email: {
        value: cdktn.stringToHclTerraform(this._serviceAccountEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_workload_identity_federation: {
        value: cdktn.booleanToHclTerraform(this._useWorkloadIdentityFederation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
