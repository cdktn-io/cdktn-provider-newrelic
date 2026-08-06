# `cloudGcpDmIntegrations` Submodule <a name="`cloudGcpDmIntegrations` Submodule" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGcpDmIntegrations <a name="CloudGcpDmIntegrations" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations newrelic_cloud_gcp_dm_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrations(
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
  ai_platform: CloudGcpDmIntegrationsAiPlatform = None,
  alloy_db: CloudGcpDmIntegrationsAlloyDb = None,
  api_gateway: CloudGcpDmIntegrationsApiGateway = None,
  app_engine: CloudGcpDmIntegrationsAppEngine = None,
  big_query: CloudGcpDmIntegrationsBigQuery = None,
  big_table: CloudGcpDmIntegrationsBigTable = None,
  composer: CloudGcpDmIntegrationsComposer = None,
  data_flow: CloudGcpDmIntegrationsDataFlow = None,
  data_proc: CloudGcpDmIntegrationsDataProc = None,
  data_store: CloudGcpDmIntegrationsDataStore = None,
  firebase_app_hosting: CloudGcpDmIntegrationsFirebaseAppHosting = None,
  firebase_auth: CloudGcpDmIntegrationsFirebaseAuth = None,
  firebase_database: CloudGcpDmIntegrationsFirebaseDatabase = None,
  firebase_hosting: CloudGcpDmIntegrationsFirebaseHosting = None,
  firebase_storage: CloudGcpDmIntegrationsFirebaseStorage = None,
  firebase_vertex_ai: CloudGcpDmIntegrationsFirebaseVertexAi = None,
  firestore: CloudGcpDmIntegrationsFirestore = None,
  functions: CloudGcpDmIntegrationsFunctions = None,
  id: str = None,
  interconnect: CloudGcpDmIntegrationsInterconnect = None,
  istio: CloudGcpDmIntegrationsIstio = None,
  kubernetes: CloudGcpDmIntegrationsKubernetes = None,
  load_balancing: CloudGcpDmIntegrationsLoadBalancing = None,
  managed_kafka: CloudGcpDmIntegrationsManagedKafka = None,
  mem_cache: CloudGcpDmIntegrationsMemCache = None,
  memory_store: CloudGcpDmIntegrationsMemoryStore = None,
  pub_sub: CloudGcpDmIntegrationsPubSub = None,
  redis: CloudGcpDmIntegrationsRedis = None,
  router: CloudGcpDmIntegrationsRouter = None,
  run: CloudGcpDmIntegrationsRun = None,
  spanner: CloudGcpDmIntegrationsSpanner = None,
  sql: CloudGcpDmIntegrationsSql = None,
  storage: CloudGcpDmIntegrationsStorage = None,
  virtual_machines: CloudGcpDmIntegrationsVirtualMachines = None,
  vpc_access: CloudGcpDmIntegrationsVpcAccess = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.linkedAccountId">linked_account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the GCP Dimensional Metrics linked account (from newrelic_cloud_gcp_link_account with use_workload_identity_federation = true). |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.aiPlatform">ai_platform</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a></code> | ai_platform block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.alloyDb">alloy_db</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a></code> | alloy_db block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.apiGateway">api_gateway</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a></code> | api_gateway block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.appEngine">app_engine</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a></code> | app_engine block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.bigQuery">big_query</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a></code> | big_query block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.bigTable">big_table</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a></code> | big_table block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.composer">composer</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a></code> | composer block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.dataFlow">data_flow</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a></code> | data_flow block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.dataProc">data_proc</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a></code> | data_proc block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.dataStore">data_store</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a></code> | data_store block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.firebaseAppHosting">firebase_app_hosting</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a></code> | firebase_app_hosting block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.firebaseAuth">firebase_auth</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a></code> | firebase_auth block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.firebaseDatabase">firebase_database</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a></code> | firebase_database block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.firebaseHosting">firebase_hosting</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a></code> | firebase_hosting block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.firebaseStorage">firebase_storage</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a></code> | firebase_storage block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.firebaseVertexAi">firebase_vertex_ai</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a></code> | firebase_vertex_ai block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.firestore">firestore</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a></code> | firestore block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.functions">functions</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a></code> | functions block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#id CloudGcpDmIntegrations#id}. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.interconnect">interconnect</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a></code> | interconnect block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.istio">istio</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a></code> | istio block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.kubernetes">kubernetes</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.loadBalancing">load_balancing</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a></code> | load_balancing block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.managedKafka">managed_kafka</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a></code> | managed_kafka block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.memCache">mem_cache</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a></code> | mem_cache block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.memoryStore">memory_store</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a></code> | memory_store block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.pubSub">pub_sub</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a></code> | pub_sub block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.redis">redis</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a></code> | redis block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.router">router</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a></code> | router block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.run">run</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a></code> | run block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.spanner">spanner</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a></code> | spanner block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.sql">sql</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a></code> | sql block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.virtualMachines">virtual_machines</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a></code> | virtual_machines block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.vpcAccess">vpc_access</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a></code> | vpc_access block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `linked_account_id`<sup>Required</sup> <a name="linked_account_id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.linkedAccountId"></a>

- *Type:* typing.Union[int, float]

The ID of the GCP Dimensional Metrics linked account (from newrelic_cloud_gcp_link_account with use_workload_identity_federation = true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#linked_account_id CloudGcpDmIntegrations#linked_account_id}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The New Relic account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#account_id CloudGcpDmIntegrations#account_id}

---

##### `ai_platform`<sup>Optional</sup> <a name="ai_platform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.aiPlatform"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a>

ai_platform block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#ai_platform CloudGcpDmIntegrations#ai_platform}

---

##### `alloy_db`<sup>Optional</sup> <a name="alloy_db" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.alloyDb"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a>

alloy_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#alloy_db CloudGcpDmIntegrations#alloy_db}

---

##### `api_gateway`<sup>Optional</sup> <a name="api_gateway" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.apiGateway"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a>

api_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#api_gateway CloudGcpDmIntegrations#api_gateway}

---

##### `app_engine`<sup>Optional</sup> <a name="app_engine" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.appEngine"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a>

app_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#app_engine CloudGcpDmIntegrations#app_engine}

---

##### `big_query`<sup>Optional</sup> <a name="big_query" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.bigQuery"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a>

big_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#big_query CloudGcpDmIntegrations#big_query}

---

##### `big_table`<sup>Optional</sup> <a name="big_table" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.bigTable"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a>

big_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#big_table CloudGcpDmIntegrations#big_table}

---

##### `composer`<sup>Optional</sup> <a name="composer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.composer"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a>

composer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#composer CloudGcpDmIntegrations#composer}

---

##### `data_flow`<sup>Optional</sup> <a name="data_flow" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.dataFlow"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a>

data_flow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#data_flow CloudGcpDmIntegrations#data_flow}

---

##### `data_proc`<sup>Optional</sup> <a name="data_proc" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.dataProc"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a>

data_proc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#data_proc CloudGcpDmIntegrations#data_proc}

---

##### `data_store`<sup>Optional</sup> <a name="data_store" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.dataStore"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a>

data_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#data_store CloudGcpDmIntegrations#data_store}

---

##### `firebase_app_hosting`<sup>Optional</sup> <a name="firebase_app_hosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.firebaseAppHosting"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a>

firebase_app_hosting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#firebase_app_hosting CloudGcpDmIntegrations#firebase_app_hosting}

---

##### `firebase_auth`<sup>Optional</sup> <a name="firebase_auth" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.firebaseAuth"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a>

firebase_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#firebase_auth CloudGcpDmIntegrations#firebase_auth}

---

##### `firebase_database`<sup>Optional</sup> <a name="firebase_database" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.firebaseDatabase"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a>

firebase_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#firebase_database CloudGcpDmIntegrations#firebase_database}

---

##### `firebase_hosting`<sup>Optional</sup> <a name="firebase_hosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.firebaseHosting"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a>

firebase_hosting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#firebase_hosting CloudGcpDmIntegrations#firebase_hosting}

---

##### `firebase_storage`<sup>Optional</sup> <a name="firebase_storage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.firebaseStorage"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a>

firebase_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#firebase_storage CloudGcpDmIntegrations#firebase_storage}

---

##### `firebase_vertex_ai`<sup>Optional</sup> <a name="firebase_vertex_ai" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.firebaseVertexAi"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a>

firebase_vertex_ai block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#firebase_vertex_ai CloudGcpDmIntegrations#firebase_vertex_ai}

---

##### `firestore`<sup>Optional</sup> <a name="firestore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.firestore"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a>

firestore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#firestore CloudGcpDmIntegrations#firestore}

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.functions"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a>

functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#functions CloudGcpDmIntegrations#functions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#id CloudGcpDmIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnect`<sup>Optional</sup> <a name="interconnect" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.interconnect"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a>

interconnect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#interconnect CloudGcpDmIntegrations#interconnect}

---

##### `istio`<sup>Optional</sup> <a name="istio" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.istio"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a>

istio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#istio CloudGcpDmIntegrations#istio}

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.kubernetes"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#kubernetes CloudGcpDmIntegrations#kubernetes}

---

##### `load_balancing`<sup>Optional</sup> <a name="load_balancing" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.loadBalancing"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a>

load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#load_balancing CloudGcpDmIntegrations#load_balancing}

---

##### `managed_kafka`<sup>Optional</sup> <a name="managed_kafka" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.managedKafka"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a>

managed_kafka block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#managed_kafka CloudGcpDmIntegrations#managed_kafka}

---

##### `mem_cache`<sup>Optional</sup> <a name="mem_cache" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.memCache"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a>

mem_cache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#mem_cache CloudGcpDmIntegrations#mem_cache}

---

##### `memory_store`<sup>Optional</sup> <a name="memory_store" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.memoryStore"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a>

memory_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#memory_store CloudGcpDmIntegrations#memory_store}

---

##### `pub_sub`<sup>Optional</sup> <a name="pub_sub" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.pubSub"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a>

pub_sub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#pub_sub CloudGcpDmIntegrations#pub_sub}

---

##### `redis`<sup>Optional</sup> <a name="redis" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.redis"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a>

redis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#redis CloudGcpDmIntegrations#redis}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.router"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a>

router block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#router CloudGcpDmIntegrations#router}

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.run"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#run CloudGcpDmIntegrations#run}

---

##### `spanner`<sup>Optional</sup> <a name="spanner" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.spanner"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a>

spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#spanner CloudGcpDmIntegrations#spanner}

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.sql"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a>

sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#sql CloudGcpDmIntegrations#sql}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.storage"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#storage CloudGcpDmIntegrations#storage}

---

##### `virtual_machines`<sup>Optional</sup> <a name="virtual_machines" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.virtualMachines"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a>

virtual_machines block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#virtual_machines CloudGcpDmIntegrations#virtual_machines}

---

##### `vpc_access`<sup>Optional</sup> <a name="vpc_access" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.vpcAccess"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#vpc_access CloudGcpDmIntegrations#vpc_access}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAiPlatform">put_ai_platform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAlloyDb">put_alloy_db</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putApiGateway">put_api_gateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAppEngine">put_app_engine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigQuery">put_big_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigTable">put_big_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putComposer">put_composer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataFlow">put_data_flow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataProc">put_data_proc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataStore">put_data_store</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAppHosting">put_firebase_app_hosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAuth">put_firebase_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseDatabase">put_firebase_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseHosting">put_firebase_hosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseStorage">put_firebase_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseVertexAi">put_firebase_vertex_ai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirestore">put_firestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFunctions">put_functions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putInterconnect">put_interconnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putIstio">put_istio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putKubernetes">put_kubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putLoadBalancing">put_load_balancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putManagedKafka">put_managed_kafka</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemCache">put_mem_cache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemoryStore">put_memory_store</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putPubSub">put_pub_sub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRedis">put_redis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRouter">put_router</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRun">put_run</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSpanner">put_spanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSql">put_sql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putStorage">put_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVirtualMachines">put_virtual_machines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVpcAccess">put_vpc_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAiPlatform">reset_ai_platform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAlloyDb">reset_alloy_db</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetApiGateway">reset_api_gateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAppEngine">reset_app_engine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetBigQuery">reset_big_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetBigTable">reset_big_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetComposer">reset_composer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataFlow">reset_data_flow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataProc">reset_data_proc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataStore">reset_data_store</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseAppHosting">reset_firebase_app_hosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseAuth">reset_firebase_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseDatabase">reset_firebase_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseHosting">reset_firebase_hosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseStorage">reset_firebase_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseVertexAi">reset_firebase_vertex_ai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirestore">reset_firestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFunctions">reset_functions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetInterconnect">reset_interconnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetIstio">reset_istio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetKubernetes">reset_kubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetLoadBalancing">reset_load_balancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetManagedKafka">reset_managed_kafka</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetMemCache">reset_mem_cache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetMemoryStore">reset_memory_store</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetPubSub">reset_pub_sub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRedis">reset_redis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRouter">reset_router</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRun">reset_run</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetSpanner">reset_spanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetSql">reset_sql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetStorage">reset_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetVirtualMachines">reset_virtual_machines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetVpcAccess">reset_vpc_access</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ai_platform` <a name="put_ai_platform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAiPlatform"></a>

```python
def put_ai_platform(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAiPlatform.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_alloy_db` <a name="put_alloy_db" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAlloyDb"></a>

```python
def put_alloy_db(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAlloyDb.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_api_gateway` <a name="put_api_gateway" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putApiGateway"></a>

```python
def put_api_gateway(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putApiGateway.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_app_engine` <a name="put_app_engine" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAppEngine"></a>

```python
def put_app_engine(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAppEngine.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_big_query` <a name="put_big_query" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigQuery"></a>

```python
def put_big_query(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigQuery.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_big_table` <a name="put_big_table" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigTable"></a>

```python
def put_big_table(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigTable.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_composer` <a name="put_composer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putComposer"></a>

```python
def put_composer(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putComposer.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_data_flow` <a name="put_data_flow" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataFlow"></a>

```python
def put_data_flow(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataFlow.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_data_proc` <a name="put_data_proc" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataProc"></a>

```python
def put_data_proc(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataProc.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_data_store` <a name="put_data_store" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataStore"></a>

```python
def put_data_store(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataStore.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_firebase_app_hosting` <a name="put_firebase_app_hosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAppHosting"></a>

```python
def put_firebase_app_hosting(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAppHosting.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_firebase_auth` <a name="put_firebase_auth" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAuth"></a>

```python
def put_firebase_auth(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAuth.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_firebase_database` <a name="put_firebase_database" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseDatabase"></a>

```python
def put_firebase_database(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseDatabase.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_firebase_hosting` <a name="put_firebase_hosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseHosting"></a>

```python
def put_firebase_hosting(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseHosting.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_firebase_storage` <a name="put_firebase_storage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseStorage"></a>

```python
def put_firebase_storage(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseStorage.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_firebase_vertex_ai` <a name="put_firebase_vertex_ai" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseVertexAi"></a>

```python
def put_firebase_vertex_ai(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseVertexAi.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_firestore` <a name="put_firestore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirestore"></a>

```python
def put_firestore(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirestore.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_functions` <a name="put_functions" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFunctions"></a>

```python
def put_functions(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFunctions.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_interconnect` <a name="put_interconnect" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putInterconnect"></a>

```python
def put_interconnect(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putInterconnect.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_istio` <a name="put_istio" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putIstio"></a>

```python
def put_istio(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putIstio.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_kubernetes` <a name="put_kubernetes" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putKubernetes"></a>

```python
def put_kubernetes(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putKubernetes.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_load_balancing` <a name="put_load_balancing" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putLoadBalancing"></a>

```python
def put_load_balancing(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putLoadBalancing.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_managed_kafka` <a name="put_managed_kafka" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putManagedKafka"></a>

```python
def put_managed_kafka(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putManagedKafka.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_mem_cache` <a name="put_mem_cache" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemCache"></a>

```python
def put_mem_cache(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemCache.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_memory_store` <a name="put_memory_store" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemoryStore"></a>

```python
def put_memory_store(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemoryStore.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_pub_sub` <a name="put_pub_sub" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putPubSub"></a>

```python
def put_pub_sub(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putPubSub.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_redis` <a name="put_redis" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRedis"></a>

```python
def put_redis(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRedis.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_router` <a name="put_router" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRouter"></a>

```python
def put_router(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRouter.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_run` <a name="put_run" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRun"></a>

```python
def put_run(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRun.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_spanner` <a name="put_spanner" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSpanner"></a>

```python
def put_spanner(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSpanner.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_sql` <a name="put_sql" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSql"></a>

```python
def put_sql(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSql.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_storage` <a name="put_storage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putStorage"></a>

```python
def put_storage(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putStorage.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_virtual_machines` <a name="put_virtual_machines" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVirtualMachines"></a>

```python
def put_virtual_machines(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVirtualMachines.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `put_vpc_access` <a name="put_vpc_access" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVpcAccess"></a>

```python
def put_vpc_access(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVpcAccess.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_ai_platform` <a name="reset_ai_platform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAiPlatform"></a>

```python
def reset_ai_platform() -> None
```

##### `reset_alloy_db` <a name="reset_alloy_db" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAlloyDb"></a>

```python
def reset_alloy_db() -> None
```

##### `reset_api_gateway` <a name="reset_api_gateway" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetApiGateway"></a>

```python
def reset_api_gateway() -> None
```

##### `reset_app_engine` <a name="reset_app_engine" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAppEngine"></a>

```python
def reset_app_engine() -> None
```

##### `reset_big_query` <a name="reset_big_query" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetBigQuery"></a>

```python
def reset_big_query() -> None
```

##### `reset_big_table` <a name="reset_big_table" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetBigTable"></a>

```python
def reset_big_table() -> None
```

##### `reset_composer` <a name="reset_composer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetComposer"></a>

```python
def reset_composer() -> None
```

##### `reset_data_flow` <a name="reset_data_flow" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataFlow"></a>

```python
def reset_data_flow() -> None
```

##### `reset_data_proc` <a name="reset_data_proc" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataProc"></a>

```python
def reset_data_proc() -> None
```

##### `reset_data_store` <a name="reset_data_store" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataStore"></a>

```python
def reset_data_store() -> None
```

##### `reset_firebase_app_hosting` <a name="reset_firebase_app_hosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseAppHosting"></a>

```python
def reset_firebase_app_hosting() -> None
```

##### `reset_firebase_auth` <a name="reset_firebase_auth" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseAuth"></a>

```python
def reset_firebase_auth() -> None
```

##### `reset_firebase_database` <a name="reset_firebase_database" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseDatabase"></a>

```python
def reset_firebase_database() -> None
```

##### `reset_firebase_hosting` <a name="reset_firebase_hosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseHosting"></a>

```python
def reset_firebase_hosting() -> None
```

##### `reset_firebase_storage` <a name="reset_firebase_storage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseStorage"></a>

```python
def reset_firebase_storage() -> None
```

##### `reset_firebase_vertex_ai` <a name="reset_firebase_vertex_ai" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseVertexAi"></a>

```python
def reset_firebase_vertex_ai() -> None
```

##### `reset_firestore` <a name="reset_firestore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirestore"></a>

```python
def reset_firestore() -> None
```

##### `reset_functions` <a name="reset_functions" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFunctions"></a>

```python
def reset_functions() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_interconnect` <a name="reset_interconnect" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetInterconnect"></a>

```python
def reset_interconnect() -> None
```

##### `reset_istio` <a name="reset_istio" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetIstio"></a>

```python
def reset_istio() -> None
```

##### `reset_kubernetes` <a name="reset_kubernetes" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetKubernetes"></a>

```python
def reset_kubernetes() -> None
```

##### `reset_load_balancing` <a name="reset_load_balancing" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetLoadBalancing"></a>

```python
def reset_load_balancing() -> None
```

##### `reset_managed_kafka` <a name="reset_managed_kafka" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetManagedKafka"></a>

```python
def reset_managed_kafka() -> None
```

##### `reset_mem_cache` <a name="reset_mem_cache" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetMemCache"></a>

```python
def reset_mem_cache() -> None
```

##### `reset_memory_store` <a name="reset_memory_store" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetMemoryStore"></a>

```python
def reset_memory_store() -> None
```

##### `reset_pub_sub` <a name="reset_pub_sub" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetPubSub"></a>

```python
def reset_pub_sub() -> None
```

##### `reset_redis` <a name="reset_redis" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRedis"></a>

```python
def reset_redis() -> None
```

##### `reset_router` <a name="reset_router" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRouter"></a>

```python
def reset_router() -> None
```

##### `reset_run` <a name="reset_run" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRun"></a>

```python
def reset_run() -> None
```

##### `reset_spanner` <a name="reset_spanner" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetSpanner"></a>

```python
def reset_spanner() -> None
```

##### `reset_sql` <a name="reset_sql" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetSql"></a>

```python
def reset_sql() -> None
```

##### `reset_storage` <a name="reset_storage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetStorage"></a>

```python
def reset_storage() -> None
```

##### `reset_virtual_machines` <a name="reset_virtual_machines" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetVirtualMachines"></a>

```python
def reset_virtual_machines() -> None
```

##### `reset_vpc_access` <a name="reset_vpc_access" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetVpcAccess"></a>

```python
def reset_vpc_access() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudGcpDmIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isConstruct"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformElement"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformResource"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrations.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudGcpDmIntegrations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudGcpDmIntegrations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudGcpDmIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudGcpDmIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.aiPlatform">ai_platform</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference">CloudGcpDmIntegrationsAiPlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.alloyDb">alloy_db</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference">CloudGcpDmIntegrationsAlloyDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.apiGateway">api_gateway</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference">CloudGcpDmIntegrationsApiGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.appEngine">app_engine</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference">CloudGcpDmIntegrationsAppEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigQuery">big_query</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference">CloudGcpDmIntegrationsBigQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigTable">big_table</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference">CloudGcpDmIntegrationsBigTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.composer">composer</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference">CloudGcpDmIntegrationsComposerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataFlow">data_flow</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference">CloudGcpDmIntegrationsDataFlowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataProc">data_proc</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference">CloudGcpDmIntegrationsDataProcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataStore">data_store</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference">CloudGcpDmIntegrationsDataStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAppHosting">firebase_app_hosting</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference">CloudGcpDmIntegrationsFirebaseAppHostingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAuth">firebase_auth</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference">CloudGcpDmIntegrationsFirebaseAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseDatabase">firebase_database</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference">CloudGcpDmIntegrationsFirebaseDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseHosting">firebase_hosting</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference">CloudGcpDmIntegrationsFirebaseHostingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseStorage">firebase_storage</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference">CloudGcpDmIntegrationsFirebaseStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseVertexAi">firebase_vertex_ai</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference">CloudGcpDmIntegrationsFirebaseVertexAiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firestore">firestore</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference">CloudGcpDmIntegrationsFirestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.functions">functions</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference">CloudGcpDmIntegrationsFunctionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.interconnect">interconnect</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference">CloudGcpDmIntegrationsInterconnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.istio">istio</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference">CloudGcpDmIntegrationsIstioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference">CloudGcpDmIntegrationsKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.loadBalancing">load_balancing</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference">CloudGcpDmIntegrationsLoadBalancingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.managedKafka">managed_kafka</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference">CloudGcpDmIntegrationsManagedKafkaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memCache">mem_cache</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference">CloudGcpDmIntegrationsMemCacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memoryStore">memory_store</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference">CloudGcpDmIntegrationsMemoryStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.pubSub">pub_sub</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference">CloudGcpDmIntegrationsPubSubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.redis">redis</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference">CloudGcpDmIntegrationsRedisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.router">router</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference">CloudGcpDmIntegrationsRouterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.run">run</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference">CloudGcpDmIntegrationsRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.spanner">spanner</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference">CloudGcpDmIntegrationsSpannerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.sql">sql</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference">CloudGcpDmIntegrationsSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference">CloudGcpDmIntegrationsStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.virtualMachines">virtual_machines</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference">CloudGcpDmIntegrationsVirtualMachinesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.vpcAccess">vpc_access</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference">CloudGcpDmIntegrationsVpcAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.aiPlatformInput">ai_platform_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.alloyDbInput">alloy_db_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.apiGatewayInput">api_gateway_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.appEngineInput">app_engine_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigQueryInput">big_query_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigTableInput">big_table_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.composerInput">composer_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataFlowInput">data_flow_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataProcInput">data_proc_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataStoreInput">data_store_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAppHostingInput">firebase_app_hosting_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAuthInput">firebase_auth_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseDatabaseInput">firebase_database_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseHostingInput">firebase_hosting_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseStorageInput">firebase_storage_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseVertexAiInput">firebase_vertex_ai_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firestoreInput">firestore_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.functionsInput">functions_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.interconnectInput">interconnect_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.istioInput">istio_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.kubernetesInput">kubernetes_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.linkedAccountIdInput">linked_account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.loadBalancingInput">load_balancing_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.managedKafkaInput">managed_kafka_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memCacheInput">mem_cache_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memoryStoreInput">memory_store_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.pubSubInput">pub_sub_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.redisInput">redis_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.routerInput">router_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.runInput">run_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.spannerInput">spanner_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.sqlInput">sql_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.storageInput">storage_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.virtualMachinesInput">virtual_machines_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.vpcAccessInput">vpc_access_input</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.linkedAccountId">linked_account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ai_platform`<sup>Required</sup> <a name="ai_platform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.aiPlatform"></a>

```python
ai_platform: CloudGcpDmIntegrationsAiPlatformOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference">CloudGcpDmIntegrationsAiPlatformOutputReference</a>

---

##### `alloy_db`<sup>Required</sup> <a name="alloy_db" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.alloyDb"></a>

```python
alloy_db: CloudGcpDmIntegrationsAlloyDbOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference">CloudGcpDmIntegrationsAlloyDbOutputReference</a>

---

##### `api_gateway`<sup>Required</sup> <a name="api_gateway" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.apiGateway"></a>

```python
api_gateway: CloudGcpDmIntegrationsApiGatewayOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference">CloudGcpDmIntegrationsApiGatewayOutputReference</a>

---

##### `app_engine`<sup>Required</sup> <a name="app_engine" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.appEngine"></a>

```python
app_engine: CloudGcpDmIntegrationsAppEngineOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference">CloudGcpDmIntegrationsAppEngineOutputReference</a>

---

##### `big_query`<sup>Required</sup> <a name="big_query" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigQuery"></a>

```python
big_query: CloudGcpDmIntegrationsBigQueryOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference">CloudGcpDmIntegrationsBigQueryOutputReference</a>

---

##### `big_table`<sup>Required</sup> <a name="big_table" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigTable"></a>

```python
big_table: CloudGcpDmIntegrationsBigTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference">CloudGcpDmIntegrationsBigTableOutputReference</a>

---

##### `composer`<sup>Required</sup> <a name="composer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.composer"></a>

```python
composer: CloudGcpDmIntegrationsComposerOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference">CloudGcpDmIntegrationsComposerOutputReference</a>

---

##### `data_flow`<sup>Required</sup> <a name="data_flow" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataFlow"></a>

```python
data_flow: CloudGcpDmIntegrationsDataFlowOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference">CloudGcpDmIntegrationsDataFlowOutputReference</a>

---

##### `data_proc`<sup>Required</sup> <a name="data_proc" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataProc"></a>

```python
data_proc: CloudGcpDmIntegrationsDataProcOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference">CloudGcpDmIntegrationsDataProcOutputReference</a>

---

##### `data_store`<sup>Required</sup> <a name="data_store" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataStore"></a>

```python
data_store: CloudGcpDmIntegrationsDataStoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference">CloudGcpDmIntegrationsDataStoreOutputReference</a>

---

##### `firebase_app_hosting`<sup>Required</sup> <a name="firebase_app_hosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAppHosting"></a>

```python
firebase_app_hosting: CloudGcpDmIntegrationsFirebaseAppHostingOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference">CloudGcpDmIntegrationsFirebaseAppHostingOutputReference</a>

---

##### `firebase_auth`<sup>Required</sup> <a name="firebase_auth" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAuth"></a>

```python
firebase_auth: CloudGcpDmIntegrationsFirebaseAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference">CloudGcpDmIntegrationsFirebaseAuthOutputReference</a>

---

##### `firebase_database`<sup>Required</sup> <a name="firebase_database" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseDatabase"></a>

```python
firebase_database: CloudGcpDmIntegrationsFirebaseDatabaseOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference">CloudGcpDmIntegrationsFirebaseDatabaseOutputReference</a>

---

##### `firebase_hosting`<sup>Required</sup> <a name="firebase_hosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseHosting"></a>

```python
firebase_hosting: CloudGcpDmIntegrationsFirebaseHostingOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference">CloudGcpDmIntegrationsFirebaseHostingOutputReference</a>

---

##### `firebase_storage`<sup>Required</sup> <a name="firebase_storage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseStorage"></a>

```python
firebase_storage: CloudGcpDmIntegrationsFirebaseStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference">CloudGcpDmIntegrationsFirebaseStorageOutputReference</a>

---

##### `firebase_vertex_ai`<sup>Required</sup> <a name="firebase_vertex_ai" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseVertexAi"></a>

```python
firebase_vertex_ai: CloudGcpDmIntegrationsFirebaseVertexAiOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference">CloudGcpDmIntegrationsFirebaseVertexAiOutputReference</a>

---

##### `firestore`<sup>Required</sup> <a name="firestore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firestore"></a>

```python
firestore: CloudGcpDmIntegrationsFirestoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference">CloudGcpDmIntegrationsFirestoreOutputReference</a>

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.functions"></a>

```python
functions: CloudGcpDmIntegrationsFunctionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference">CloudGcpDmIntegrationsFunctionsOutputReference</a>

---

##### `interconnect`<sup>Required</sup> <a name="interconnect" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.interconnect"></a>

```python
interconnect: CloudGcpDmIntegrationsInterconnectOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference">CloudGcpDmIntegrationsInterconnectOutputReference</a>

---

##### `istio`<sup>Required</sup> <a name="istio" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.istio"></a>

```python
istio: CloudGcpDmIntegrationsIstioOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference">CloudGcpDmIntegrationsIstioOutputReference</a>

---

##### `kubernetes`<sup>Required</sup> <a name="kubernetes" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.kubernetes"></a>

```python
kubernetes: CloudGcpDmIntegrationsKubernetesOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference">CloudGcpDmIntegrationsKubernetesOutputReference</a>

---

##### `load_balancing`<sup>Required</sup> <a name="load_balancing" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.loadBalancing"></a>

```python
load_balancing: CloudGcpDmIntegrationsLoadBalancingOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference">CloudGcpDmIntegrationsLoadBalancingOutputReference</a>

---

##### `managed_kafka`<sup>Required</sup> <a name="managed_kafka" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.managedKafka"></a>

```python
managed_kafka: CloudGcpDmIntegrationsManagedKafkaOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference">CloudGcpDmIntegrationsManagedKafkaOutputReference</a>

---

##### `mem_cache`<sup>Required</sup> <a name="mem_cache" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memCache"></a>

```python
mem_cache: CloudGcpDmIntegrationsMemCacheOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference">CloudGcpDmIntegrationsMemCacheOutputReference</a>

---

##### `memory_store`<sup>Required</sup> <a name="memory_store" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memoryStore"></a>

```python
memory_store: CloudGcpDmIntegrationsMemoryStoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference">CloudGcpDmIntegrationsMemoryStoreOutputReference</a>

---

##### `pub_sub`<sup>Required</sup> <a name="pub_sub" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.pubSub"></a>

```python
pub_sub: CloudGcpDmIntegrationsPubSubOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference">CloudGcpDmIntegrationsPubSubOutputReference</a>

---

##### `redis`<sup>Required</sup> <a name="redis" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.redis"></a>

```python
redis: CloudGcpDmIntegrationsRedisOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference">CloudGcpDmIntegrationsRedisOutputReference</a>

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.router"></a>

```python
router: CloudGcpDmIntegrationsRouterOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference">CloudGcpDmIntegrationsRouterOutputReference</a>

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.run"></a>

```python
run: CloudGcpDmIntegrationsRunOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference">CloudGcpDmIntegrationsRunOutputReference</a>

---

##### `spanner`<sup>Required</sup> <a name="spanner" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.spanner"></a>

```python
spanner: CloudGcpDmIntegrationsSpannerOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference">CloudGcpDmIntegrationsSpannerOutputReference</a>

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.sql"></a>

```python
sql: CloudGcpDmIntegrationsSqlOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference">CloudGcpDmIntegrationsSqlOutputReference</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.storage"></a>

```python
storage: CloudGcpDmIntegrationsStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference">CloudGcpDmIntegrationsStorageOutputReference</a>

---

##### `virtual_machines`<sup>Required</sup> <a name="virtual_machines" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.virtualMachines"></a>

```python
virtual_machines: CloudGcpDmIntegrationsVirtualMachinesOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference">CloudGcpDmIntegrationsVirtualMachinesOutputReference</a>

---

##### `vpc_access`<sup>Required</sup> <a name="vpc_access" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.vpcAccess"></a>

```python
vpc_access: CloudGcpDmIntegrationsVpcAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference">CloudGcpDmIntegrationsVpcAccessOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ai_platform_input`<sup>Optional</sup> <a name="ai_platform_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.aiPlatformInput"></a>

```python
ai_platform_input: CloudGcpDmIntegrationsAiPlatform
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a>

---

##### `alloy_db_input`<sup>Optional</sup> <a name="alloy_db_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.alloyDbInput"></a>

```python
alloy_db_input: CloudGcpDmIntegrationsAlloyDb
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a>

---

##### `api_gateway_input`<sup>Optional</sup> <a name="api_gateway_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.apiGatewayInput"></a>

```python
api_gateway_input: CloudGcpDmIntegrationsApiGateway
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a>

---

##### `app_engine_input`<sup>Optional</sup> <a name="app_engine_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.appEngineInput"></a>

```python
app_engine_input: CloudGcpDmIntegrationsAppEngine
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a>

---

##### `big_query_input`<sup>Optional</sup> <a name="big_query_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigQueryInput"></a>

```python
big_query_input: CloudGcpDmIntegrationsBigQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a>

---

##### `big_table_input`<sup>Optional</sup> <a name="big_table_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigTableInput"></a>

```python
big_table_input: CloudGcpDmIntegrationsBigTable
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a>

---

##### `composer_input`<sup>Optional</sup> <a name="composer_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.composerInput"></a>

```python
composer_input: CloudGcpDmIntegrationsComposer
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a>

---

##### `data_flow_input`<sup>Optional</sup> <a name="data_flow_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataFlowInput"></a>

```python
data_flow_input: CloudGcpDmIntegrationsDataFlow
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a>

---

##### `data_proc_input`<sup>Optional</sup> <a name="data_proc_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataProcInput"></a>

```python
data_proc_input: CloudGcpDmIntegrationsDataProc
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a>

---

##### `data_store_input`<sup>Optional</sup> <a name="data_store_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataStoreInput"></a>

```python
data_store_input: CloudGcpDmIntegrationsDataStore
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a>

---

##### `firebase_app_hosting_input`<sup>Optional</sup> <a name="firebase_app_hosting_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAppHostingInput"></a>

```python
firebase_app_hosting_input: CloudGcpDmIntegrationsFirebaseAppHosting
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a>

---

##### `firebase_auth_input`<sup>Optional</sup> <a name="firebase_auth_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAuthInput"></a>

```python
firebase_auth_input: CloudGcpDmIntegrationsFirebaseAuth
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a>

---

##### `firebase_database_input`<sup>Optional</sup> <a name="firebase_database_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseDatabaseInput"></a>

```python
firebase_database_input: CloudGcpDmIntegrationsFirebaseDatabase
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a>

---

##### `firebase_hosting_input`<sup>Optional</sup> <a name="firebase_hosting_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseHostingInput"></a>

```python
firebase_hosting_input: CloudGcpDmIntegrationsFirebaseHosting
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a>

---

##### `firebase_storage_input`<sup>Optional</sup> <a name="firebase_storage_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseStorageInput"></a>

```python
firebase_storage_input: CloudGcpDmIntegrationsFirebaseStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a>

---

##### `firebase_vertex_ai_input`<sup>Optional</sup> <a name="firebase_vertex_ai_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseVertexAiInput"></a>

```python
firebase_vertex_ai_input: CloudGcpDmIntegrationsFirebaseVertexAi
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a>

---

##### `firestore_input`<sup>Optional</sup> <a name="firestore_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firestoreInput"></a>

```python
firestore_input: CloudGcpDmIntegrationsFirestore
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a>

---

##### `functions_input`<sup>Optional</sup> <a name="functions_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.functionsInput"></a>

```python
functions_input: CloudGcpDmIntegrationsFunctions
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interconnect_input`<sup>Optional</sup> <a name="interconnect_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.interconnectInput"></a>

```python
interconnect_input: CloudGcpDmIntegrationsInterconnect
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a>

---

##### `istio_input`<sup>Optional</sup> <a name="istio_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.istioInput"></a>

```python
istio_input: CloudGcpDmIntegrationsIstio
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a>

---

##### `kubernetes_input`<sup>Optional</sup> <a name="kubernetes_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.kubernetesInput"></a>

```python
kubernetes_input: CloudGcpDmIntegrationsKubernetes
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a>

---

##### `linked_account_id_input`<sup>Optional</sup> <a name="linked_account_id_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.linkedAccountIdInput"></a>

```python
linked_account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_balancing_input`<sup>Optional</sup> <a name="load_balancing_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.loadBalancingInput"></a>

```python
load_balancing_input: CloudGcpDmIntegrationsLoadBalancing
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a>

---

##### `managed_kafka_input`<sup>Optional</sup> <a name="managed_kafka_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.managedKafkaInput"></a>

```python
managed_kafka_input: CloudGcpDmIntegrationsManagedKafka
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a>

---

##### `mem_cache_input`<sup>Optional</sup> <a name="mem_cache_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memCacheInput"></a>

```python
mem_cache_input: CloudGcpDmIntegrationsMemCache
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a>

---

##### `memory_store_input`<sup>Optional</sup> <a name="memory_store_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memoryStoreInput"></a>

```python
memory_store_input: CloudGcpDmIntegrationsMemoryStore
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a>

---

##### `pub_sub_input`<sup>Optional</sup> <a name="pub_sub_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.pubSubInput"></a>

```python
pub_sub_input: CloudGcpDmIntegrationsPubSub
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a>

---

##### `redis_input`<sup>Optional</sup> <a name="redis_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.redisInput"></a>

```python
redis_input: CloudGcpDmIntegrationsRedis
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a>

---

##### `router_input`<sup>Optional</sup> <a name="router_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.routerInput"></a>

```python
router_input: CloudGcpDmIntegrationsRouter
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a>

---

##### `run_input`<sup>Optional</sup> <a name="run_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.runInput"></a>

```python
run_input: CloudGcpDmIntegrationsRun
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a>

---

##### `spanner_input`<sup>Optional</sup> <a name="spanner_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.spannerInput"></a>

```python
spanner_input: CloudGcpDmIntegrationsSpanner
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a>

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.sqlInput"></a>

```python
sql_input: CloudGcpDmIntegrationsSql
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a>

---

##### `storage_input`<sup>Optional</sup> <a name="storage_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.storageInput"></a>

```python
storage_input: CloudGcpDmIntegrationsStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a>

---

##### `virtual_machines_input`<sup>Optional</sup> <a name="virtual_machines_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.virtualMachinesInput"></a>

```python
virtual_machines_input: CloudGcpDmIntegrationsVirtualMachines
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a>

---

##### `vpc_access_input`<sup>Optional</sup> <a name="vpc_access_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.vpcAccessInput"></a>

```python
vpc_access_input: CloudGcpDmIntegrationsVpcAccess
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `linked_account_id`<sup>Required</sup> <a name="linked_account_id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.linkedAccountId"></a>

```python
linked_account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGcpDmIntegrationsAiPlatform <a name="CloudGcpDmIntegrationsAiPlatform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsAlloyDb <a name="CloudGcpDmIntegrationsAlloyDb" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsApiGateway <a name="CloudGcpDmIntegrationsApiGateway" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsAppEngine <a name="CloudGcpDmIntegrationsAppEngine" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsBigQuery <a name="CloudGcpDmIntegrationsBigQuery" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsBigTable <a name="CloudGcpDmIntegrationsBigTable" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsComposer <a name="CloudGcpDmIntegrationsComposer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsConfig <a name="CloudGcpDmIntegrationsConfig" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  linked_account_id: typing.Union[int, float],
  account_id: typing.Union[int, float] = None,
  ai_platform: CloudGcpDmIntegrationsAiPlatform = None,
  alloy_db: CloudGcpDmIntegrationsAlloyDb = None,
  api_gateway: CloudGcpDmIntegrationsApiGateway = None,
  app_engine: CloudGcpDmIntegrationsAppEngine = None,
  big_query: CloudGcpDmIntegrationsBigQuery = None,
  big_table: CloudGcpDmIntegrationsBigTable = None,
  composer: CloudGcpDmIntegrationsComposer = None,
  data_flow: CloudGcpDmIntegrationsDataFlow = None,
  data_proc: CloudGcpDmIntegrationsDataProc = None,
  data_store: CloudGcpDmIntegrationsDataStore = None,
  firebase_app_hosting: CloudGcpDmIntegrationsFirebaseAppHosting = None,
  firebase_auth: CloudGcpDmIntegrationsFirebaseAuth = None,
  firebase_database: CloudGcpDmIntegrationsFirebaseDatabase = None,
  firebase_hosting: CloudGcpDmIntegrationsFirebaseHosting = None,
  firebase_storage: CloudGcpDmIntegrationsFirebaseStorage = None,
  firebase_vertex_ai: CloudGcpDmIntegrationsFirebaseVertexAi = None,
  firestore: CloudGcpDmIntegrationsFirestore = None,
  functions: CloudGcpDmIntegrationsFunctions = None,
  id: str = None,
  interconnect: CloudGcpDmIntegrationsInterconnect = None,
  istio: CloudGcpDmIntegrationsIstio = None,
  kubernetes: CloudGcpDmIntegrationsKubernetes = None,
  load_balancing: CloudGcpDmIntegrationsLoadBalancing = None,
  managed_kafka: CloudGcpDmIntegrationsManagedKafka = None,
  mem_cache: CloudGcpDmIntegrationsMemCache = None,
  memory_store: CloudGcpDmIntegrationsMemoryStore = None,
  pub_sub: CloudGcpDmIntegrationsPubSub = None,
  redis: CloudGcpDmIntegrationsRedis = None,
  router: CloudGcpDmIntegrationsRouter = None,
  run: CloudGcpDmIntegrationsRun = None,
  spanner: CloudGcpDmIntegrationsSpanner = None,
  sql: CloudGcpDmIntegrationsSql = None,
  storage: CloudGcpDmIntegrationsStorage = None,
  virtual_machines: CloudGcpDmIntegrationsVirtualMachines = None,
  vpc_access: CloudGcpDmIntegrationsVpcAccess = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.linkedAccountId">linked_account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the GCP Dimensional Metrics linked account (from newrelic_cloud_gcp_link_account with use_workload_identity_federation = true). |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.aiPlatform">ai_platform</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a></code> | ai_platform block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.alloyDb">alloy_db</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a></code> | alloy_db block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.apiGateway">api_gateway</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a></code> | api_gateway block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.appEngine">app_engine</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a></code> | app_engine block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.bigQuery">big_query</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a></code> | big_query block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.bigTable">big_table</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a></code> | big_table block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.composer">composer</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a></code> | composer block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataFlow">data_flow</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a></code> | data_flow block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataProc">data_proc</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a></code> | data_proc block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataStore">data_store</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a></code> | data_store block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseAppHosting">firebase_app_hosting</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a></code> | firebase_app_hosting block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseAuth">firebase_auth</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a></code> | firebase_auth block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseDatabase">firebase_database</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a></code> | firebase_database block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseHosting">firebase_hosting</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a></code> | firebase_hosting block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseStorage">firebase_storage</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a></code> | firebase_storage block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseVertexAi">firebase_vertex_ai</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a></code> | firebase_vertex_ai block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firestore">firestore</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a></code> | firestore block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.functions">functions</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a></code> | functions block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#id CloudGcpDmIntegrations#id}. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.interconnect">interconnect</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a></code> | interconnect block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.istio">istio</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a></code> | istio block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.loadBalancing">load_balancing</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a></code> | load_balancing block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.managedKafka">managed_kafka</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a></code> | managed_kafka block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.memCache">mem_cache</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a></code> | mem_cache block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.memoryStore">memory_store</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a></code> | memory_store block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.pubSub">pub_sub</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a></code> | pub_sub block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.redis">redis</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a></code> | redis block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.router">router</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a></code> | router block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.run">run</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a></code> | run block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.spanner">spanner</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a></code> | spanner block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.sql">sql</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a></code> | sql block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.virtualMachines">virtual_machines</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a></code> | virtual_machines block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.vpcAccess">vpc_access</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a></code> | vpc_access block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `linked_account_id`<sup>Required</sup> <a name="linked_account_id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.linkedAccountId"></a>

```python
linked_account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the GCP Dimensional Metrics linked account (from newrelic_cloud_gcp_link_account with use_workload_identity_federation = true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#linked_account_id CloudGcpDmIntegrations#linked_account_id}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The New Relic account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#account_id CloudGcpDmIntegrations#account_id}

---

##### `ai_platform`<sup>Optional</sup> <a name="ai_platform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.aiPlatform"></a>

```python
ai_platform: CloudGcpDmIntegrationsAiPlatform
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a>

ai_platform block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#ai_platform CloudGcpDmIntegrations#ai_platform}

---

##### `alloy_db`<sup>Optional</sup> <a name="alloy_db" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.alloyDb"></a>

```python
alloy_db: CloudGcpDmIntegrationsAlloyDb
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a>

alloy_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#alloy_db CloudGcpDmIntegrations#alloy_db}

---

##### `api_gateway`<sup>Optional</sup> <a name="api_gateway" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.apiGateway"></a>

```python
api_gateway: CloudGcpDmIntegrationsApiGateway
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a>

api_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#api_gateway CloudGcpDmIntegrations#api_gateway}

---

##### `app_engine`<sup>Optional</sup> <a name="app_engine" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.appEngine"></a>

```python
app_engine: CloudGcpDmIntegrationsAppEngine
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a>

app_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#app_engine CloudGcpDmIntegrations#app_engine}

---

##### `big_query`<sup>Optional</sup> <a name="big_query" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.bigQuery"></a>

```python
big_query: CloudGcpDmIntegrationsBigQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a>

big_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#big_query CloudGcpDmIntegrations#big_query}

---

##### `big_table`<sup>Optional</sup> <a name="big_table" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.bigTable"></a>

```python
big_table: CloudGcpDmIntegrationsBigTable
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a>

big_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#big_table CloudGcpDmIntegrations#big_table}

---

##### `composer`<sup>Optional</sup> <a name="composer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.composer"></a>

```python
composer: CloudGcpDmIntegrationsComposer
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a>

composer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#composer CloudGcpDmIntegrations#composer}

---

##### `data_flow`<sup>Optional</sup> <a name="data_flow" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataFlow"></a>

```python
data_flow: CloudGcpDmIntegrationsDataFlow
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a>

data_flow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#data_flow CloudGcpDmIntegrations#data_flow}

---

##### `data_proc`<sup>Optional</sup> <a name="data_proc" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataProc"></a>

```python
data_proc: CloudGcpDmIntegrationsDataProc
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a>

data_proc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#data_proc CloudGcpDmIntegrations#data_proc}

---

##### `data_store`<sup>Optional</sup> <a name="data_store" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataStore"></a>

```python
data_store: CloudGcpDmIntegrationsDataStore
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a>

data_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#data_store CloudGcpDmIntegrations#data_store}

---

##### `firebase_app_hosting`<sup>Optional</sup> <a name="firebase_app_hosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseAppHosting"></a>

```python
firebase_app_hosting: CloudGcpDmIntegrationsFirebaseAppHosting
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a>

firebase_app_hosting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#firebase_app_hosting CloudGcpDmIntegrations#firebase_app_hosting}

---

##### `firebase_auth`<sup>Optional</sup> <a name="firebase_auth" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseAuth"></a>

```python
firebase_auth: CloudGcpDmIntegrationsFirebaseAuth
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a>

firebase_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#firebase_auth CloudGcpDmIntegrations#firebase_auth}

---

##### `firebase_database`<sup>Optional</sup> <a name="firebase_database" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseDatabase"></a>

```python
firebase_database: CloudGcpDmIntegrationsFirebaseDatabase
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a>

firebase_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#firebase_database CloudGcpDmIntegrations#firebase_database}

---

##### `firebase_hosting`<sup>Optional</sup> <a name="firebase_hosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseHosting"></a>

```python
firebase_hosting: CloudGcpDmIntegrationsFirebaseHosting
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a>

firebase_hosting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#firebase_hosting CloudGcpDmIntegrations#firebase_hosting}

---

##### `firebase_storage`<sup>Optional</sup> <a name="firebase_storage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseStorage"></a>

```python
firebase_storage: CloudGcpDmIntegrationsFirebaseStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a>

firebase_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#firebase_storage CloudGcpDmIntegrations#firebase_storage}

---

##### `firebase_vertex_ai`<sup>Optional</sup> <a name="firebase_vertex_ai" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseVertexAi"></a>

```python
firebase_vertex_ai: CloudGcpDmIntegrationsFirebaseVertexAi
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a>

firebase_vertex_ai block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#firebase_vertex_ai CloudGcpDmIntegrations#firebase_vertex_ai}

---

##### `firestore`<sup>Optional</sup> <a name="firestore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firestore"></a>

```python
firestore: CloudGcpDmIntegrationsFirestore
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a>

firestore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#firestore CloudGcpDmIntegrations#firestore}

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.functions"></a>

```python
functions: CloudGcpDmIntegrationsFunctions
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a>

functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#functions CloudGcpDmIntegrations#functions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#id CloudGcpDmIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnect`<sup>Optional</sup> <a name="interconnect" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.interconnect"></a>

```python
interconnect: CloudGcpDmIntegrationsInterconnect
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a>

interconnect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#interconnect CloudGcpDmIntegrations#interconnect}

---

##### `istio`<sup>Optional</sup> <a name="istio" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.istio"></a>

```python
istio: CloudGcpDmIntegrationsIstio
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a>

istio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#istio CloudGcpDmIntegrations#istio}

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.kubernetes"></a>

```python
kubernetes: CloudGcpDmIntegrationsKubernetes
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#kubernetes CloudGcpDmIntegrations#kubernetes}

---

##### `load_balancing`<sup>Optional</sup> <a name="load_balancing" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.loadBalancing"></a>

```python
load_balancing: CloudGcpDmIntegrationsLoadBalancing
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a>

load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#load_balancing CloudGcpDmIntegrations#load_balancing}

---

##### `managed_kafka`<sup>Optional</sup> <a name="managed_kafka" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.managedKafka"></a>

```python
managed_kafka: CloudGcpDmIntegrationsManagedKafka
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a>

managed_kafka block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#managed_kafka CloudGcpDmIntegrations#managed_kafka}

---

##### `mem_cache`<sup>Optional</sup> <a name="mem_cache" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.memCache"></a>

```python
mem_cache: CloudGcpDmIntegrationsMemCache
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a>

mem_cache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#mem_cache CloudGcpDmIntegrations#mem_cache}

---

##### `memory_store`<sup>Optional</sup> <a name="memory_store" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.memoryStore"></a>

```python
memory_store: CloudGcpDmIntegrationsMemoryStore
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a>

memory_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#memory_store CloudGcpDmIntegrations#memory_store}

---

##### `pub_sub`<sup>Optional</sup> <a name="pub_sub" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.pubSub"></a>

```python
pub_sub: CloudGcpDmIntegrationsPubSub
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a>

pub_sub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#pub_sub CloudGcpDmIntegrations#pub_sub}

---

##### `redis`<sup>Optional</sup> <a name="redis" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.redis"></a>

```python
redis: CloudGcpDmIntegrationsRedis
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a>

redis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#redis CloudGcpDmIntegrations#redis}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.router"></a>

```python
router: CloudGcpDmIntegrationsRouter
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a>

router block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#router CloudGcpDmIntegrations#router}

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.run"></a>

```python
run: CloudGcpDmIntegrationsRun
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#run CloudGcpDmIntegrations#run}

---

##### `spanner`<sup>Optional</sup> <a name="spanner" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.spanner"></a>

```python
spanner: CloudGcpDmIntegrationsSpanner
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a>

spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#spanner CloudGcpDmIntegrations#spanner}

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.sql"></a>

```python
sql: CloudGcpDmIntegrationsSql
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a>

sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#sql CloudGcpDmIntegrations#sql}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.storage"></a>

```python
storage: CloudGcpDmIntegrationsStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#storage CloudGcpDmIntegrations#storage}

---

##### `virtual_machines`<sup>Optional</sup> <a name="virtual_machines" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.virtualMachines"></a>

```python
virtual_machines: CloudGcpDmIntegrationsVirtualMachines
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a>

virtual_machines block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#virtual_machines CloudGcpDmIntegrations#virtual_machines}

---

##### `vpc_access`<sup>Optional</sup> <a name="vpc_access" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.vpcAccess"></a>

```python
vpc_access: CloudGcpDmIntegrationsVpcAccess
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#vpc_access CloudGcpDmIntegrations#vpc_access}

---

### CloudGcpDmIntegrationsDataFlow <a name="CloudGcpDmIntegrationsDataFlow" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsDataProc <a name="CloudGcpDmIntegrationsDataProc" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsDataStore <a name="CloudGcpDmIntegrationsDataStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseAppHosting <a name="CloudGcpDmIntegrationsFirebaseAppHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseAuth <a name="CloudGcpDmIntegrationsFirebaseAuth" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseDatabase <a name="CloudGcpDmIntegrationsFirebaseDatabase" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseHosting <a name="CloudGcpDmIntegrationsFirebaseHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseStorage <a name="CloudGcpDmIntegrationsFirebaseStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseVertexAi <a name="CloudGcpDmIntegrationsFirebaseVertexAi" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirestore <a name="CloudGcpDmIntegrationsFirestore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFunctions <a name="CloudGcpDmIntegrationsFunctions" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsInterconnect <a name="CloudGcpDmIntegrationsInterconnect" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsIstio <a name="CloudGcpDmIntegrationsIstio" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsKubernetes <a name="CloudGcpDmIntegrationsKubernetes" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsLoadBalancing <a name="CloudGcpDmIntegrationsLoadBalancing" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsManagedKafka <a name="CloudGcpDmIntegrationsManagedKafka" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsMemCache <a name="CloudGcpDmIntegrationsMemCache" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsMemoryStore <a name="CloudGcpDmIntegrationsMemoryStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsPubSub <a name="CloudGcpDmIntegrationsPubSub" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsRedis <a name="CloudGcpDmIntegrationsRedis" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsRouter <a name="CloudGcpDmIntegrationsRouter" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsRun <a name="CloudGcpDmIntegrationsRun" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsSpanner <a name="CloudGcpDmIntegrationsSpanner" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsSql <a name="CloudGcpDmIntegrationsSql" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsStorage <a name="CloudGcpDmIntegrationsStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsVirtualMachines <a name="CloudGcpDmIntegrationsVirtualMachines" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsVpcAccess <a name="CloudGcpDmIntegrationsVpcAccess" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudGcpDmIntegrationsAiPlatformOutputReference <a name="CloudGcpDmIntegrationsAiPlatformOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsAiPlatform
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a>

---


### CloudGcpDmIntegrationsAlloyDbOutputReference <a name="CloudGcpDmIntegrationsAlloyDbOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsAlloyDb
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a>

---


### CloudGcpDmIntegrationsApiGatewayOutputReference <a name="CloudGcpDmIntegrationsApiGatewayOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsApiGateway
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a>

---


### CloudGcpDmIntegrationsAppEngineOutputReference <a name="CloudGcpDmIntegrationsAppEngineOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsAppEngine
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a>

---


### CloudGcpDmIntegrationsBigQueryOutputReference <a name="CloudGcpDmIntegrationsBigQueryOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsBigQuery
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a>

---


### CloudGcpDmIntegrationsBigTableOutputReference <a name="CloudGcpDmIntegrationsBigTableOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsBigTable
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a>

---


### CloudGcpDmIntegrationsComposerOutputReference <a name="CloudGcpDmIntegrationsComposerOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsComposer
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a>

---


### CloudGcpDmIntegrationsDataFlowOutputReference <a name="CloudGcpDmIntegrationsDataFlowOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsDataFlow
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a>

---


### CloudGcpDmIntegrationsDataProcOutputReference <a name="CloudGcpDmIntegrationsDataProcOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsDataProc
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a>

---


### CloudGcpDmIntegrationsDataStoreOutputReference <a name="CloudGcpDmIntegrationsDataStoreOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsDataStore
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a>

---


### CloudGcpDmIntegrationsFirebaseAppHostingOutputReference <a name="CloudGcpDmIntegrationsFirebaseAppHostingOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsFirebaseAppHosting
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a>

---


### CloudGcpDmIntegrationsFirebaseAuthOutputReference <a name="CloudGcpDmIntegrationsFirebaseAuthOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsFirebaseAuth
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a>

---


### CloudGcpDmIntegrationsFirebaseDatabaseOutputReference <a name="CloudGcpDmIntegrationsFirebaseDatabaseOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsFirebaseDatabase
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a>

---


### CloudGcpDmIntegrationsFirebaseHostingOutputReference <a name="CloudGcpDmIntegrationsFirebaseHostingOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsFirebaseHosting
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a>

---


### CloudGcpDmIntegrationsFirebaseStorageOutputReference <a name="CloudGcpDmIntegrationsFirebaseStorageOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsFirebaseStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a>

---


### CloudGcpDmIntegrationsFirebaseVertexAiOutputReference <a name="CloudGcpDmIntegrationsFirebaseVertexAiOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsFirebaseVertexAi
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a>

---


### CloudGcpDmIntegrationsFirestoreOutputReference <a name="CloudGcpDmIntegrationsFirestoreOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsFirestore
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a>

---


### CloudGcpDmIntegrationsFunctionsOutputReference <a name="CloudGcpDmIntegrationsFunctionsOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsFunctions
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a>

---


### CloudGcpDmIntegrationsInterconnectOutputReference <a name="CloudGcpDmIntegrationsInterconnectOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsInterconnect
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a>

---


### CloudGcpDmIntegrationsIstioOutputReference <a name="CloudGcpDmIntegrationsIstioOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsIstio
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a>

---


### CloudGcpDmIntegrationsKubernetesOutputReference <a name="CloudGcpDmIntegrationsKubernetesOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsKubernetes
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a>

---


### CloudGcpDmIntegrationsLoadBalancingOutputReference <a name="CloudGcpDmIntegrationsLoadBalancingOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsLoadBalancing
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a>

---


### CloudGcpDmIntegrationsManagedKafkaOutputReference <a name="CloudGcpDmIntegrationsManagedKafkaOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsManagedKafka
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a>

---


### CloudGcpDmIntegrationsMemCacheOutputReference <a name="CloudGcpDmIntegrationsMemCacheOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsMemCache
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a>

---


### CloudGcpDmIntegrationsMemoryStoreOutputReference <a name="CloudGcpDmIntegrationsMemoryStoreOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsMemoryStore
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a>

---


### CloudGcpDmIntegrationsPubSubOutputReference <a name="CloudGcpDmIntegrationsPubSubOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsPubSub
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a>

---


### CloudGcpDmIntegrationsRedisOutputReference <a name="CloudGcpDmIntegrationsRedisOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsRedis
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a>

---


### CloudGcpDmIntegrationsRouterOutputReference <a name="CloudGcpDmIntegrationsRouterOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsRouter
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a>

---


### CloudGcpDmIntegrationsRunOutputReference <a name="CloudGcpDmIntegrationsRunOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsRun
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a>

---


### CloudGcpDmIntegrationsSpannerOutputReference <a name="CloudGcpDmIntegrationsSpannerOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsSpanner
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a>

---


### CloudGcpDmIntegrationsSqlOutputReference <a name="CloudGcpDmIntegrationsSqlOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsSql
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a>

---


### CloudGcpDmIntegrationsStorageOutputReference <a name="CloudGcpDmIntegrationsStorageOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsStorage
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a>

---


### CloudGcpDmIntegrationsVirtualMachinesOutputReference <a name="CloudGcpDmIntegrationsVirtualMachinesOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsVirtualMachines
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a>

---


### CloudGcpDmIntegrationsVpcAccessOutputReference <a name="CloudGcpDmIntegrationsVpcAccessOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_newrelic import cloud_gcp_dm_integrations

cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpDmIntegrationsVpcAccess
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a>

---



