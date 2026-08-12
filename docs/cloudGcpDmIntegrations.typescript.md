# `cloudGcpDmIntegrations` Submodule <a name="`cloudGcpDmIntegrations` Submodule" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGcpDmIntegrations <a name="CloudGcpDmIntegrations" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations newrelic_cloud_gcp_dm_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrations(scope: Construct, id: string, config: CloudGcpDmIntegrationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig">CloudGcpDmIntegrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig">CloudGcpDmIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAiPlatform">putAiPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAlloyDb">putAlloyDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putApiGateway">putApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAppEngine">putAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigQuery">putBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigTable">putBigTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putComposer">putComposer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataFlow">putDataFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataProc">putDataProc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataStore">putDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAppHosting">putFirebaseAppHosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAuth">putFirebaseAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseDatabase">putFirebaseDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseHosting">putFirebaseHosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseStorage">putFirebaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseVertexAi">putFirebaseVertexAi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirestore">putFirestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFunctions">putFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putInterconnect">putInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putIstio">putIstio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putKubernetes">putKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putLoadBalancing">putLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putManagedKafka">putManagedKafka</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemCache">putMemCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemoryStore">putMemoryStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putPubSub">putPubSub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRedis">putRedis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRouter">putRouter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRun">putRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSpanner">putSpanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSql">putSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVirtualMachines">putVirtualMachines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVpcAccess">putVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAiPlatform">resetAiPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAlloyDb">resetAlloyDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetApiGateway">resetApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAppEngine">resetAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetBigQuery">resetBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetBigTable">resetBigTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetComposer">resetComposer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataFlow">resetDataFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataProc">resetDataProc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataStore">resetDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseAppHosting">resetFirebaseAppHosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseAuth">resetFirebaseAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseDatabase">resetFirebaseDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseHosting">resetFirebaseHosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseStorage">resetFirebaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseVertexAi">resetFirebaseVertexAi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirestore">resetFirestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFunctions">resetFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetInterconnect">resetInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetIstio">resetIstio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetKubernetes">resetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetLoadBalancing">resetLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetManagedKafka">resetManagedKafka</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetMemCache">resetMemCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetMemoryStore">resetMemoryStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetPubSub">resetPubSub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRedis">resetRedis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRouter">resetRouter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRun">resetRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetSpanner">resetSpanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetSql">resetSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetVirtualMachines">resetVirtualMachines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetVpcAccess">resetVpcAccess</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAiPlatform` <a name="putAiPlatform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAiPlatform"></a>

```typescript
public putAiPlatform(value: CloudGcpDmIntegrationsAiPlatform): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAiPlatform.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a>

---

##### `putAlloyDb` <a name="putAlloyDb" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAlloyDb"></a>

```typescript
public putAlloyDb(value: CloudGcpDmIntegrationsAlloyDb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAlloyDb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a>

---

##### `putApiGateway` <a name="putApiGateway" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putApiGateway"></a>

```typescript
public putApiGateway(value: CloudGcpDmIntegrationsApiGateway): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putApiGateway.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a>

---

##### `putAppEngine` <a name="putAppEngine" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAppEngine"></a>

```typescript
public putAppEngine(value: CloudGcpDmIntegrationsAppEngine): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAppEngine.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a>

---

##### `putBigQuery` <a name="putBigQuery" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigQuery"></a>

```typescript
public putBigQuery(value: CloudGcpDmIntegrationsBigQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a>

---

##### `putBigTable` <a name="putBigTable" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigTable"></a>

```typescript
public putBigTable(value: CloudGcpDmIntegrationsBigTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a>

---

##### `putComposer` <a name="putComposer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putComposer"></a>

```typescript
public putComposer(value: CloudGcpDmIntegrationsComposer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putComposer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a>

---

##### `putDataFlow` <a name="putDataFlow" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataFlow"></a>

```typescript
public putDataFlow(value: CloudGcpDmIntegrationsDataFlow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataFlow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a>

---

##### `putDataProc` <a name="putDataProc" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataProc"></a>

```typescript
public putDataProc(value: CloudGcpDmIntegrationsDataProc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataProc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a>

---

##### `putDataStore` <a name="putDataStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataStore"></a>

```typescript
public putDataStore(value: CloudGcpDmIntegrationsDataStore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataStore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a>

---

##### `putFirebaseAppHosting` <a name="putFirebaseAppHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAppHosting"></a>

```typescript
public putFirebaseAppHosting(value: CloudGcpDmIntegrationsFirebaseAppHosting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAppHosting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a>

---

##### `putFirebaseAuth` <a name="putFirebaseAuth" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAuth"></a>

```typescript
public putFirebaseAuth(value: CloudGcpDmIntegrationsFirebaseAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a>

---

##### `putFirebaseDatabase` <a name="putFirebaseDatabase" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseDatabase"></a>

```typescript
public putFirebaseDatabase(value: CloudGcpDmIntegrationsFirebaseDatabase): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a>

---

##### `putFirebaseHosting` <a name="putFirebaseHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseHosting"></a>

```typescript
public putFirebaseHosting(value: CloudGcpDmIntegrationsFirebaseHosting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseHosting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a>

---

##### `putFirebaseStorage` <a name="putFirebaseStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseStorage"></a>

```typescript
public putFirebaseStorage(value: CloudGcpDmIntegrationsFirebaseStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a>

---

##### `putFirebaseVertexAi` <a name="putFirebaseVertexAi" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseVertexAi"></a>

```typescript
public putFirebaseVertexAi(value: CloudGcpDmIntegrationsFirebaseVertexAi): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseVertexAi.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a>

---

##### `putFirestore` <a name="putFirestore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirestore"></a>

```typescript
public putFirestore(value: CloudGcpDmIntegrationsFirestore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirestore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a>

---

##### `putFunctions` <a name="putFunctions" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFunctions"></a>

```typescript
public putFunctions(value: CloudGcpDmIntegrationsFunctions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFunctions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a>

---

##### `putInterconnect` <a name="putInterconnect" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putInterconnect"></a>

```typescript
public putInterconnect(value: CloudGcpDmIntegrationsInterconnect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putInterconnect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a>

---

##### `putIstio` <a name="putIstio" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putIstio"></a>

```typescript
public putIstio(value: CloudGcpDmIntegrationsIstio): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putIstio.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a>

---

##### `putKubernetes` <a name="putKubernetes" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putKubernetes"></a>

```typescript
public putKubernetes(value: CloudGcpDmIntegrationsKubernetes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a>

---

##### `putLoadBalancing` <a name="putLoadBalancing" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putLoadBalancing"></a>

```typescript
public putLoadBalancing(value: CloudGcpDmIntegrationsLoadBalancing): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putLoadBalancing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a>

---

##### `putManagedKafka` <a name="putManagedKafka" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putManagedKafka"></a>

```typescript
public putManagedKafka(value: CloudGcpDmIntegrationsManagedKafka): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putManagedKafka.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a>

---

##### `putMemCache` <a name="putMemCache" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemCache"></a>

```typescript
public putMemCache(value: CloudGcpDmIntegrationsMemCache): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemCache.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a>

---

##### `putMemoryStore` <a name="putMemoryStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemoryStore"></a>

```typescript
public putMemoryStore(value: CloudGcpDmIntegrationsMemoryStore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemoryStore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a>

---

##### `putPubSub` <a name="putPubSub" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putPubSub"></a>

```typescript
public putPubSub(value: CloudGcpDmIntegrationsPubSub): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putPubSub.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a>

---

##### `putRedis` <a name="putRedis" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRedis"></a>

```typescript
public putRedis(value: CloudGcpDmIntegrationsRedis): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRedis.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a>

---

##### `putRouter` <a name="putRouter" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRouter"></a>

```typescript
public putRouter(value: CloudGcpDmIntegrationsRouter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRouter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a>

---

##### `putRun` <a name="putRun" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRun"></a>

```typescript
public putRun(value: CloudGcpDmIntegrationsRun): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRun.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a>

---

##### `putSpanner` <a name="putSpanner" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSpanner"></a>

```typescript
public putSpanner(value: CloudGcpDmIntegrationsSpanner): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSpanner.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a>

---

##### `putSql` <a name="putSql" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSql"></a>

```typescript
public putSql(value: CloudGcpDmIntegrationsSql): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSql.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a>

---

##### `putStorage` <a name="putStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putStorage"></a>

```typescript
public putStorage(value: CloudGcpDmIntegrationsStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a>

---

##### `putVirtualMachines` <a name="putVirtualMachines" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVirtualMachines"></a>

```typescript
public putVirtualMachines(value: CloudGcpDmIntegrationsVirtualMachines): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVirtualMachines.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a>

---

##### `putVpcAccess` <a name="putVpcAccess" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVpcAccess"></a>

```typescript
public putVpcAccess(value: CloudGcpDmIntegrationsVpcAccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVpcAccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetAiPlatform` <a name="resetAiPlatform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAiPlatform"></a>

```typescript
public resetAiPlatform(): void
```

##### `resetAlloyDb` <a name="resetAlloyDb" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAlloyDb"></a>

```typescript
public resetAlloyDb(): void
```

##### `resetApiGateway` <a name="resetApiGateway" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetApiGateway"></a>

```typescript
public resetApiGateway(): void
```

##### `resetAppEngine` <a name="resetAppEngine" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAppEngine"></a>

```typescript
public resetAppEngine(): void
```

##### `resetBigQuery` <a name="resetBigQuery" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetBigQuery"></a>

```typescript
public resetBigQuery(): void
```

##### `resetBigTable` <a name="resetBigTable" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetBigTable"></a>

```typescript
public resetBigTable(): void
```

##### `resetComposer` <a name="resetComposer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetComposer"></a>

```typescript
public resetComposer(): void
```

##### `resetDataFlow` <a name="resetDataFlow" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataFlow"></a>

```typescript
public resetDataFlow(): void
```

##### `resetDataProc` <a name="resetDataProc" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataProc"></a>

```typescript
public resetDataProc(): void
```

##### `resetDataStore` <a name="resetDataStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataStore"></a>

```typescript
public resetDataStore(): void
```

##### `resetFirebaseAppHosting` <a name="resetFirebaseAppHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseAppHosting"></a>

```typescript
public resetFirebaseAppHosting(): void
```

##### `resetFirebaseAuth` <a name="resetFirebaseAuth" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseAuth"></a>

```typescript
public resetFirebaseAuth(): void
```

##### `resetFirebaseDatabase` <a name="resetFirebaseDatabase" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseDatabase"></a>

```typescript
public resetFirebaseDatabase(): void
```

##### `resetFirebaseHosting` <a name="resetFirebaseHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseHosting"></a>

```typescript
public resetFirebaseHosting(): void
```

##### `resetFirebaseStorage` <a name="resetFirebaseStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseStorage"></a>

```typescript
public resetFirebaseStorage(): void
```

##### `resetFirebaseVertexAi` <a name="resetFirebaseVertexAi" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseVertexAi"></a>

```typescript
public resetFirebaseVertexAi(): void
```

##### `resetFirestore` <a name="resetFirestore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirestore"></a>

```typescript
public resetFirestore(): void
```

##### `resetFunctions` <a name="resetFunctions" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFunctions"></a>

```typescript
public resetFunctions(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInterconnect` <a name="resetInterconnect" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetInterconnect"></a>

```typescript
public resetInterconnect(): void
```

##### `resetIstio` <a name="resetIstio" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetIstio"></a>

```typescript
public resetIstio(): void
```

##### `resetKubernetes` <a name="resetKubernetes" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetKubernetes"></a>

```typescript
public resetKubernetes(): void
```

##### `resetLoadBalancing` <a name="resetLoadBalancing" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetLoadBalancing"></a>

```typescript
public resetLoadBalancing(): void
```

##### `resetManagedKafka` <a name="resetManagedKafka" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetManagedKafka"></a>

```typescript
public resetManagedKafka(): void
```

##### `resetMemCache` <a name="resetMemCache" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetMemCache"></a>

```typescript
public resetMemCache(): void
```

##### `resetMemoryStore` <a name="resetMemoryStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetMemoryStore"></a>

```typescript
public resetMemoryStore(): void
```

##### `resetPubSub` <a name="resetPubSub" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetPubSub"></a>

```typescript
public resetPubSub(): void
```

##### `resetRedis` <a name="resetRedis" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRedis"></a>

```typescript
public resetRedis(): void
```

##### `resetRouter` <a name="resetRouter" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRouter"></a>

```typescript
public resetRouter(): void
```

##### `resetRun` <a name="resetRun" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRun"></a>

```typescript
public resetRun(): void
```

##### `resetSpanner` <a name="resetSpanner" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetSpanner"></a>

```typescript
public resetSpanner(): void
```

##### `resetSql` <a name="resetSql" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetSql"></a>

```typescript
public resetSql(): void
```

##### `resetStorage` <a name="resetStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetStorage"></a>

```typescript
public resetStorage(): void
```

##### `resetVirtualMachines` <a name="resetVirtualMachines" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetVirtualMachines"></a>

```typescript
public resetVirtualMachines(): void
```

##### `resetVpcAccess` <a name="resetVpcAccess" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetVpcAccess"></a>

```typescript
public resetVpcAccess(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudGcpDmIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isConstruct"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

cloudGcpDmIntegrations.CloudGcpDmIntegrations.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformElement"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformResource"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudGcpDmIntegrations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudGcpDmIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudGcpDmIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudGcpDmIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.aiPlatform">aiPlatform</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference">CloudGcpDmIntegrationsAiPlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.alloyDb">alloyDb</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference">CloudGcpDmIntegrationsAlloyDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.apiGateway">apiGateway</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference">CloudGcpDmIntegrationsApiGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.appEngine">appEngine</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference">CloudGcpDmIntegrationsAppEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigQuery">bigQuery</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference">CloudGcpDmIntegrationsBigQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigTable">bigTable</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference">CloudGcpDmIntegrationsBigTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.composer">composer</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference">CloudGcpDmIntegrationsComposerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataFlow">dataFlow</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference">CloudGcpDmIntegrationsDataFlowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataProc">dataProc</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference">CloudGcpDmIntegrationsDataProcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataStore">dataStore</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference">CloudGcpDmIntegrationsDataStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAppHosting">firebaseAppHosting</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference">CloudGcpDmIntegrationsFirebaseAppHostingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAuth">firebaseAuth</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference">CloudGcpDmIntegrationsFirebaseAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseDatabase">firebaseDatabase</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference">CloudGcpDmIntegrationsFirebaseDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseHosting">firebaseHosting</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference">CloudGcpDmIntegrationsFirebaseHostingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseStorage">firebaseStorage</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference">CloudGcpDmIntegrationsFirebaseStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseVertexAi">firebaseVertexAi</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference">CloudGcpDmIntegrationsFirebaseVertexAiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firestore">firestore</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference">CloudGcpDmIntegrationsFirestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.functions">functions</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference">CloudGcpDmIntegrationsFunctionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.interconnect">interconnect</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference">CloudGcpDmIntegrationsInterconnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.istio">istio</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference">CloudGcpDmIntegrationsIstioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference">CloudGcpDmIntegrationsKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.loadBalancing">loadBalancing</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference">CloudGcpDmIntegrationsLoadBalancingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.managedKafka">managedKafka</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference">CloudGcpDmIntegrationsManagedKafkaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memCache">memCache</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference">CloudGcpDmIntegrationsMemCacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memoryStore">memoryStore</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference">CloudGcpDmIntegrationsMemoryStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.pubSub">pubSub</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference">CloudGcpDmIntegrationsPubSubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.redis">redis</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference">CloudGcpDmIntegrationsRedisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.router">router</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference">CloudGcpDmIntegrationsRouterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.run">run</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference">CloudGcpDmIntegrationsRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.spanner">spanner</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference">CloudGcpDmIntegrationsSpannerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.sql">sql</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference">CloudGcpDmIntegrationsSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference">CloudGcpDmIntegrationsStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.virtualMachines">virtualMachines</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference">CloudGcpDmIntegrationsVirtualMachinesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.vpcAccess">vpcAccess</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference">CloudGcpDmIntegrationsVpcAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.aiPlatformInput">aiPlatformInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.alloyDbInput">alloyDbInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.apiGatewayInput">apiGatewayInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.appEngineInput">appEngineInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigQueryInput">bigQueryInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigTableInput">bigTableInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.composerInput">composerInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataFlowInput">dataFlowInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataProcInput">dataProcInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataStoreInput">dataStoreInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAppHostingInput">firebaseAppHostingInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAuthInput">firebaseAuthInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseDatabaseInput">firebaseDatabaseInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseHostingInput">firebaseHostingInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseStorageInput">firebaseStorageInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseVertexAiInput">firebaseVertexAiInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firestoreInput">firestoreInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.functionsInput">functionsInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.interconnectInput">interconnectInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.istioInput">istioInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.kubernetesInput">kubernetesInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.linkedAccountIdInput">linkedAccountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.loadBalancingInput">loadBalancingInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.managedKafkaInput">managedKafkaInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memCacheInput">memCacheInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memoryStoreInput">memoryStoreInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.pubSubInput">pubSubInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.redisInput">redisInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.routerInput">routerInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.runInput">runInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.spannerInput">spannerInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.sqlInput">sqlInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.storageInput">storageInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.virtualMachinesInput">virtualMachinesInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.vpcAccessInput">vpcAccessInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.linkedAccountId">linkedAccountId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aiPlatform`<sup>Required</sup> <a name="aiPlatform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.aiPlatform"></a>

```typescript
public readonly aiPlatform: CloudGcpDmIntegrationsAiPlatformOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference">CloudGcpDmIntegrationsAiPlatformOutputReference</a>

---

##### `alloyDb`<sup>Required</sup> <a name="alloyDb" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.alloyDb"></a>

```typescript
public readonly alloyDb: CloudGcpDmIntegrationsAlloyDbOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference">CloudGcpDmIntegrationsAlloyDbOutputReference</a>

---

##### `apiGateway`<sup>Required</sup> <a name="apiGateway" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.apiGateway"></a>

```typescript
public readonly apiGateway: CloudGcpDmIntegrationsApiGatewayOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference">CloudGcpDmIntegrationsApiGatewayOutputReference</a>

---

##### `appEngine`<sup>Required</sup> <a name="appEngine" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.appEngine"></a>

```typescript
public readonly appEngine: CloudGcpDmIntegrationsAppEngineOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference">CloudGcpDmIntegrationsAppEngineOutputReference</a>

---

##### `bigQuery`<sup>Required</sup> <a name="bigQuery" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigQuery"></a>

```typescript
public readonly bigQuery: CloudGcpDmIntegrationsBigQueryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference">CloudGcpDmIntegrationsBigQueryOutputReference</a>

---

##### `bigTable`<sup>Required</sup> <a name="bigTable" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigTable"></a>

```typescript
public readonly bigTable: CloudGcpDmIntegrationsBigTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference">CloudGcpDmIntegrationsBigTableOutputReference</a>

---

##### `composer`<sup>Required</sup> <a name="composer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.composer"></a>

```typescript
public readonly composer: CloudGcpDmIntegrationsComposerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference">CloudGcpDmIntegrationsComposerOutputReference</a>

---

##### `dataFlow`<sup>Required</sup> <a name="dataFlow" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataFlow"></a>

```typescript
public readonly dataFlow: CloudGcpDmIntegrationsDataFlowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference">CloudGcpDmIntegrationsDataFlowOutputReference</a>

---

##### `dataProc`<sup>Required</sup> <a name="dataProc" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataProc"></a>

```typescript
public readonly dataProc: CloudGcpDmIntegrationsDataProcOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference">CloudGcpDmIntegrationsDataProcOutputReference</a>

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataStore"></a>

```typescript
public readonly dataStore: CloudGcpDmIntegrationsDataStoreOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference">CloudGcpDmIntegrationsDataStoreOutputReference</a>

---

##### `firebaseAppHosting`<sup>Required</sup> <a name="firebaseAppHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAppHosting"></a>

```typescript
public readonly firebaseAppHosting: CloudGcpDmIntegrationsFirebaseAppHostingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference">CloudGcpDmIntegrationsFirebaseAppHostingOutputReference</a>

---

##### `firebaseAuth`<sup>Required</sup> <a name="firebaseAuth" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAuth"></a>

```typescript
public readonly firebaseAuth: CloudGcpDmIntegrationsFirebaseAuthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference">CloudGcpDmIntegrationsFirebaseAuthOutputReference</a>

---

##### `firebaseDatabase`<sup>Required</sup> <a name="firebaseDatabase" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseDatabase"></a>

```typescript
public readonly firebaseDatabase: CloudGcpDmIntegrationsFirebaseDatabaseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference">CloudGcpDmIntegrationsFirebaseDatabaseOutputReference</a>

---

##### `firebaseHosting`<sup>Required</sup> <a name="firebaseHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseHosting"></a>

```typescript
public readonly firebaseHosting: CloudGcpDmIntegrationsFirebaseHostingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference">CloudGcpDmIntegrationsFirebaseHostingOutputReference</a>

---

##### `firebaseStorage`<sup>Required</sup> <a name="firebaseStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseStorage"></a>

```typescript
public readonly firebaseStorage: CloudGcpDmIntegrationsFirebaseStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference">CloudGcpDmIntegrationsFirebaseStorageOutputReference</a>

---

##### `firebaseVertexAi`<sup>Required</sup> <a name="firebaseVertexAi" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseVertexAi"></a>

```typescript
public readonly firebaseVertexAi: CloudGcpDmIntegrationsFirebaseVertexAiOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference">CloudGcpDmIntegrationsFirebaseVertexAiOutputReference</a>

---

##### `firestore`<sup>Required</sup> <a name="firestore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firestore"></a>

```typescript
public readonly firestore: CloudGcpDmIntegrationsFirestoreOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference">CloudGcpDmIntegrationsFirestoreOutputReference</a>

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.functions"></a>

```typescript
public readonly functions: CloudGcpDmIntegrationsFunctionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference">CloudGcpDmIntegrationsFunctionsOutputReference</a>

---

##### `interconnect`<sup>Required</sup> <a name="interconnect" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.interconnect"></a>

```typescript
public readonly interconnect: CloudGcpDmIntegrationsInterconnectOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference">CloudGcpDmIntegrationsInterconnectOutputReference</a>

---

##### `istio`<sup>Required</sup> <a name="istio" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.istio"></a>

```typescript
public readonly istio: CloudGcpDmIntegrationsIstioOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference">CloudGcpDmIntegrationsIstioOutputReference</a>

---

##### `kubernetes`<sup>Required</sup> <a name="kubernetes" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.kubernetes"></a>

```typescript
public readonly kubernetes: CloudGcpDmIntegrationsKubernetesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference">CloudGcpDmIntegrationsKubernetesOutputReference</a>

---

##### `loadBalancing`<sup>Required</sup> <a name="loadBalancing" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.loadBalancing"></a>

```typescript
public readonly loadBalancing: CloudGcpDmIntegrationsLoadBalancingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference">CloudGcpDmIntegrationsLoadBalancingOutputReference</a>

---

##### `managedKafka`<sup>Required</sup> <a name="managedKafka" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.managedKafka"></a>

```typescript
public readonly managedKafka: CloudGcpDmIntegrationsManagedKafkaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference">CloudGcpDmIntegrationsManagedKafkaOutputReference</a>

---

##### `memCache`<sup>Required</sup> <a name="memCache" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memCache"></a>

```typescript
public readonly memCache: CloudGcpDmIntegrationsMemCacheOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference">CloudGcpDmIntegrationsMemCacheOutputReference</a>

---

##### `memoryStore`<sup>Required</sup> <a name="memoryStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memoryStore"></a>

```typescript
public readonly memoryStore: CloudGcpDmIntegrationsMemoryStoreOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference">CloudGcpDmIntegrationsMemoryStoreOutputReference</a>

---

##### `pubSub`<sup>Required</sup> <a name="pubSub" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.pubSub"></a>

```typescript
public readonly pubSub: CloudGcpDmIntegrationsPubSubOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference">CloudGcpDmIntegrationsPubSubOutputReference</a>

---

##### `redis`<sup>Required</sup> <a name="redis" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.redis"></a>

```typescript
public readonly redis: CloudGcpDmIntegrationsRedisOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference">CloudGcpDmIntegrationsRedisOutputReference</a>

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.router"></a>

```typescript
public readonly router: CloudGcpDmIntegrationsRouterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference">CloudGcpDmIntegrationsRouterOutputReference</a>

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.run"></a>

```typescript
public readonly run: CloudGcpDmIntegrationsRunOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference">CloudGcpDmIntegrationsRunOutputReference</a>

---

##### `spanner`<sup>Required</sup> <a name="spanner" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.spanner"></a>

```typescript
public readonly spanner: CloudGcpDmIntegrationsSpannerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference">CloudGcpDmIntegrationsSpannerOutputReference</a>

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.sql"></a>

```typescript
public readonly sql: CloudGcpDmIntegrationsSqlOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference">CloudGcpDmIntegrationsSqlOutputReference</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.storage"></a>

```typescript
public readonly storage: CloudGcpDmIntegrationsStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference">CloudGcpDmIntegrationsStorageOutputReference</a>

---

##### `virtualMachines`<sup>Required</sup> <a name="virtualMachines" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.virtualMachines"></a>

```typescript
public readonly virtualMachines: CloudGcpDmIntegrationsVirtualMachinesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference">CloudGcpDmIntegrationsVirtualMachinesOutputReference</a>

---

##### `vpcAccess`<sup>Required</sup> <a name="vpcAccess" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.vpcAccess"></a>

```typescript
public readonly vpcAccess: CloudGcpDmIntegrationsVpcAccessOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference">CloudGcpDmIntegrationsVpcAccessOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `aiPlatformInput`<sup>Optional</sup> <a name="aiPlatformInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.aiPlatformInput"></a>

```typescript
public readonly aiPlatformInput: CloudGcpDmIntegrationsAiPlatform;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a>

---

##### `alloyDbInput`<sup>Optional</sup> <a name="alloyDbInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.alloyDbInput"></a>

```typescript
public readonly alloyDbInput: CloudGcpDmIntegrationsAlloyDb;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a>

---

##### `apiGatewayInput`<sup>Optional</sup> <a name="apiGatewayInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.apiGatewayInput"></a>

```typescript
public readonly apiGatewayInput: CloudGcpDmIntegrationsApiGateway;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a>

---

##### `appEngineInput`<sup>Optional</sup> <a name="appEngineInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.appEngineInput"></a>

```typescript
public readonly appEngineInput: CloudGcpDmIntegrationsAppEngine;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a>

---

##### `bigQueryInput`<sup>Optional</sup> <a name="bigQueryInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigQueryInput"></a>

```typescript
public readonly bigQueryInput: CloudGcpDmIntegrationsBigQuery;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a>

---

##### `bigTableInput`<sup>Optional</sup> <a name="bigTableInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigTableInput"></a>

```typescript
public readonly bigTableInput: CloudGcpDmIntegrationsBigTable;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a>

---

##### `composerInput`<sup>Optional</sup> <a name="composerInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.composerInput"></a>

```typescript
public readonly composerInput: CloudGcpDmIntegrationsComposer;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a>

---

##### `dataFlowInput`<sup>Optional</sup> <a name="dataFlowInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataFlowInput"></a>

```typescript
public readonly dataFlowInput: CloudGcpDmIntegrationsDataFlow;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a>

---

##### `dataProcInput`<sup>Optional</sup> <a name="dataProcInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataProcInput"></a>

```typescript
public readonly dataProcInput: CloudGcpDmIntegrationsDataProc;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a>

---

##### `dataStoreInput`<sup>Optional</sup> <a name="dataStoreInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataStoreInput"></a>

```typescript
public readonly dataStoreInput: CloudGcpDmIntegrationsDataStore;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a>

---

##### `firebaseAppHostingInput`<sup>Optional</sup> <a name="firebaseAppHostingInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAppHostingInput"></a>

```typescript
public readonly firebaseAppHostingInput: CloudGcpDmIntegrationsFirebaseAppHosting;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a>

---

##### `firebaseAuthInput`<sup>Optional</sup> <a name="firebaseAuthInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAuthInput"></a>

```typescript
public readonly firebaseAuthInput: CloudGcpDmIntegrationsFirebaseAuth;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a>

---

##### `firebaseDatabaseInput`<sup>Optional</sup> <a name="firebaseDatabaseInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseDatabaseInput"></a>

```typescript
public readonly firebaseDatabaseInput: CloudGcpDmIntegrationsFirebaseDatabase;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a>

---

##### `firebaseHostingInput`<sup>Optional</sup> <a name="firebaseHostingInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseHostingInput"></a>

```typescript
public readonly firebaseHostingInput: CloudGcpDmIntegrationsFirebaseHosting;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a>

---

##### `firebaseStorageInput`<sup>Optional</sup> <a name="firebaseStorageInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseStorageInput"></a>

```typescript
public readonly firebaseStorageInput: CloudGcpDmIntegrationsFirebaseStorage;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a>

---

##### `firebaseVertexAiInput`<sup>Optional</sup> <a name="firebaseVertexAiInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseVertexAiInput"></a>

```typescript
public readonly firebaseVertexAiInput: CloudGcpDmIntegrationsFirebaseVertexAi;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a>

---

##### `firestoreInput`<sup>Optional</sup> <a name="firestoreInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firestoreInput"></a>

```typescript
public readonly firestoreInput: CloudGcpDmIntegrationsFirestore;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a>

---

##### `functionsInput`<sup>Optional</sup> <a name="functionsInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.functionsInput"></a>

```typescript
public readonly functionsInput: CloudGcpDmIntegrationsFunctions;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interconnectInput`<sup>Optional</sup> <a name="interconnectInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.interconnectInput"></a>

```typescript
public readonly interconnectInput: CloudGcpDmIntegrationsInterconnect;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a>

---

##### `istioInput`<sup>Optional</sup> <a name="istioInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.istioInput"></a>

```typescript
public readonly istioInput: CloudGcpDmIntegrationsIstio;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a>

---

##### `kubernetesInput`<sup>Optional</sup> <a name="kubernetesInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.kubernetesInput"></a>

```typescript
public readonly kubernetesInput: CloudGcpDmIntegrationsKubernetes;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a>

---

##### `linkedAccountIdInput`<sup>Optional</sup> <a name="linkedAccountIdInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.linkedAccountIdInput"></a>

```typescript
public readonly linkedAccountIdInput: number;
```

- *Type:* number

---

##### `loadBalancingInput`<sup>Optional</sup> <a name="loadBalancingInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.loadBalancingInput"></a>

```typescript
public readonly loadBalancingInput: CloudGcpDmIntegrationsLoadBalancing;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a>

---

##### `managedKafkaInput`<sup>Optional</sup> <a name="managedKafkaInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.managedKafkaInput"></a>

```typescript
public readonly managedKafkaInput: CloudGcpDmIntegrationsManagedKafka;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a>

---

##### `memCacheInput`<sup>Optional</sup> <a name="memCacheInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memCacheInput"></a>

```typescript
public readonly memCacheInput: CloudGcpDmIntegrationsMemCache;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a>

---

##### `memoryStoreInput`<sup>Optional</sup> <a name="memoryStoreInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memoryStoreInput"></a>

```typescript
public readonly memoryStoreInput: CloudGcpDmIntegrationsMemoryStore;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a>

---

##### `pubSubInput`<sup>Optional</sup> <a name="pubSubInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.pubSubInput"></a>

```typescript
public readonly pubSubInput: CloudGcpDmIntegrationsPubSub;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a>

---

##### `redisInput`<sup>Optional</sup> <a name="redisInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.redisInput"></a>

```typescript
public readonly redisInput: CloudGcpDmIntegrationsRedis;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a>

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.routerInput"></a>

```typescript
public readonly routerInput: CloudGcpDmIntegrationsRouter;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a>

---

##### `runInput`<sup>Optional</sup> <a name="runInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.runInput"></a>

```typescript
public readonly runInput: CloudGcpDmIntegrationsRun;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a>

---

##### `spannerInput`<sup>Optional</sup> <a name="spannerInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.spannerInput"></a>

```typescript
public readonly spannerInput: CloudGcpDmIntegrationsSpanner;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a>

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.sqlInput"></a>

```typescript
public readonly sqlInput: CloudGcpDmIntegrationsSql;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a>

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.storageInput"></a>

```typescript
public readonly storageInput: CloudGcpDmIntegrationsStorage;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a>

---

##### `virtualMachinesInput`<sup>Optional</sup> <a name="virtualMachinesInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.virtualMachinesInput"></a>

```typescript
public readonly virtualMachinesInput: CloudGcpDmIntegrationsVirtualMachines;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a>

---

##### `vpcAccessInput`<sup>Optional</sup> <a name="vpcAccessInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.vpcAccessInput"></a>

```typescript
public readonly vpcAccessInput: CloudGcpDmIntegrationsVpcAccess;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.linkedAccountId"></a>

```typescript
public readonly linkedAccountId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGcpDmIntegrationsAiPlatform <a name="CloudGcpDmIntegrationsAiPlatform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsAiPlatform: cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsAlloyDb <a name="CloudGcpDmIntegrationsAlloyDb" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsAlloyDb: cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsApiGateway <a name="CloudGcpDmIntegrationsApiGateway" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsApiGateway: cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsAppEngine <a name="CloudGcpDmIntegrationsAppEngine" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsAppEngine: cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsBigQuery <a name="CloudGcpDmIntegrationsBigQuery" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsBigQuery: cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsBigTable <a name="CloudGcpDmIntegrationsBigTable" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsBigTable: cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsComposer <a name="CloudGcpDmIntegrationsComposer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsComposer: cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsConfig <a name="CloudGcpDmIntegrationsConfig" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsConfig: cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.linkedAccountId">linkedAccountId</a></code> | <code>number</code> | The ID of the GCP Dimensional Metrics linked account (from newrelic_cloud_gcp_link_account with use_workload_identity_federation = true). |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.accountId">accountId</a></code> | <code>number</code> | The New Relic account ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.aiPlatform">aiPlatform</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a></code> | ai_platform block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.alloyDb">alloyDb</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a></code> | alloy_db block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.apiGateway">apiGateway</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a></code> | api_gateway block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.appEngine">appEngine</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a></code> | app_engine block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.bigQuery">bigQuery</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a></code> | big_query block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.bigTable">bigTable</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a></code> | big_table block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.composer">composer</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a></code> | composer block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataFlow">dataFlow</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a></code> | data_flow block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataProc">dataProc</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a></code> | data_proc block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataStore">dataStore</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a></code> | data_store block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseAppHosting">firebaseAppHosting</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a></code> | firebase_app_hosting block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseAuth">firebaseAuth</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a></code> | firebase_auth block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseDatabase">firebaseDatabase</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a></code> | firebase_database block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseHosting">firebaseHosting</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a></code> | firebase_hosting block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseStorage">firebaseStorage</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a></code> | firebase_storage block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseVertexAi">firebaseVertexAi</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a></code> | firebase_vertex_ai block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firestore">firestore</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a></code> | firestore block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.functions">functions</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a></code> | functions block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#id CloudGcpDmIntegrations#id}. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.interconnect">interconnect</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a></code> | interconnect block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.istio">istio</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a></code> | istio block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.loadBalancing">loadBalancing</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a></code> | load_balancing block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.managedKafka">managedKafka</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a></code> | managed_kafka block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.memCache">memCache</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a></code> | mem_cache block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.memoryStore">memoryStore</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a></code> | memory_store block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.pubSub">pubSub</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a></code> | pub_sub block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.redis">redis</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a></code> | redis block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.router">router</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a></code> | router block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.run">run</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a></code> | run block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.spanner">spanner</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a></code> | spanner block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.sql">sql</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a></code> | sql block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.virtualMachines">virtualMachines</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a></code> | virtual_machines block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.vpcAccess">vpcAccess</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a></code> | vpc_access block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.linkedAccountId"></a>

```typescript
public readonly linkedAccountId: number;
```

- *Type:* number

The ID of the GCP Dimensional Metrics linked account (from newrelic_cloud_gcp_link_account with use_workload_identity_federation = true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#linked_account_id CloudGcpDmIntegrations#linked_account_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The New Relic account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#account_id CloudGcpDmIntegrations#account_id}

---

##### `aiPlatform`<sup>Optional</sup> <a name="aiPlatform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.aiPlatform"></a>

```typescript
public readonly aiPlatform: CloudGcpDmIntegrationsAiPlatform;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a>

ai_platform block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#ai_platform CloudGcpDmIntegrations#ai_platform}

---

##### `alloyDb`<sup>Optional</sup> <a name="alloyDb" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.alloyDb"></a>

```typescript
public readonly alloyDb: CloudGcpDmIntegrationsAlloyDb;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a>

alloy_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#alloy_db CloudGcpDmIntegrations#alloy_db}

---

##### `apiGateway`<sup>Optional</sup> <a name="apiGateway" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.apiGateway"></a>

```typescript
public readonly apiGateway: CloudGcpDmIntegrationsApiGateway;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a>

api_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#api_gateway CloudGcpDmIntegrations#api_gateway}

---

##### `appEngine`<sup>Optional</sup> <a name="appEngine" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.appEngine"></a>

```typescript
public readonly appEngine: CloudGcpDmIntegrationsAppEngine;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a>

app_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#app_engine CloudGcpDmIntegrations#app_engine}

---

##### `bigQuery`<sup>Optional</sup> <a name="bigQuery" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.bigQuery"></a>

```typescript
public readonly bigQuery: CloudGcpDmIntegrationsBigQuery;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a>

big_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#big_query CloudGcpDmIntegrations#big_query}

---

##### `bigTable`<sup>Optional</sup> <a name="bigTable" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.bigTable"></a>

```typescript
public readonly bigTable: CloudGcpDmIntegrationsBigTable;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a>

big_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#big_table CloudGcpDmIntegrations#big_table}

---

##### `composer`<sup>Optional</sup> <a name="composer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.composer"></a>

```typescript
public readonly composer: CloudGcpDmIntegrationsComposer;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a>

composer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#composer CloudGcpDmIntegrations#composer}

---

##### `dataFlow`<sup>Optional</sup> <a name="dataFlow" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataFlow"></a>

```typescript
public readonly dataFlow: CloudGcpDmIntegrationsDataFlow;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a>

data_flow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#data_flow CloudGcpDmIntegrations#data_flow}

---

##### `dataProc`<sup>Optional</sup> <a name="dataProc" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataProc"></a>

```typescript
public readonly dataProc: CloudGcpDmIntegrationsDataProc;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a>

data_proc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#data_proc CloudGcpDmIntegrations#data_proc}

---

##### `dataStore`<sup>Optional</sup> <a name="dataStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataStore"></a>

```typescript
public readonly dataStore: CloudGcpDmIntegrationsDataStore;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a>

data_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#data_store CloudGcpDmIntegrations#data_store}

---

##### `firebaseAppHosting`<sup>Optional</sup> <a name="firebaseAppHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseAppHosting"></a>

```typescript
public readonly firebaseAppHosting: CloudGcpDmIntegrationsFirebaseAppHosting;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a>

firebase_app_hosting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#firebase_app_hosting CloudGcpDmIntegrations#firebase_app_hosting}

---

##### `firebaseAuth`<sup>Optional</sup> <a name="firebaseAuth" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseAuth"></a>

```typescript
public readonly firebaseAuth: CloudGcpDmIntegrationsFirebaseAuth;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a>

firebase_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#firebase_auth CloudGcpDmIntegrations#firebase_auth}

---

##### `firebaseDatabase`<sup>Optional</sup> <a name="firebaseDatabase" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseDatabase"></a>

```typescript
public readonly firebaseDatabase: CloudGcpDmIntegrationsFirebaseDatabase;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a>

firebase_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#firebase_database CloudGcpDmIntegrations#firebase_database}

---

##### `firebaseHosting`<sup>Optional</sup> <a name="firebaseHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseHosting"></a>

```typescript
public readonly firebaseHosting: CloudGcpDmIntegrationsFirebaseHosting;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a>

firebase_hosting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#firebase_hosting CloudGcpDmIntegrations#firebase_hosting}

---

##### `firebaseStorage`<sup>Optional</sup> <a name="firebaseStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseStorage"></a>

```typescript
public readonly firebaseStorage: CloudGcpDmIntegrationsFirebaseStorage;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a>

firebase_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#firebase_storage CloudGcpDmIntegrations#firebase_storage}

---

##### `firebaseVertexAi`<sup>Optional</sup> <a name="firebaseVertexAi" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseVertexAi"></a>

```typescript
public readonly firebaseVertexAi: CloudGcpDmIntegrationsFirebaseVertexAi;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a>

firebase_vertex_ai block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#firebase_vertex_ai CloudGcpDmIntegrations#firebase_vertex_ai}

---

##### `firestore`<sup>Optional</sup> <a name="firestore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firestore"></a>

```typescript
public readonly firestore: CloudGcpDmIntegrationsFirestore;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a>

firestore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#firestore CloudGcpDmIntegrations#firestore}

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.functions"></a>

```typescript
public readonly functions: CloudGcpDmIntegrationsFunctions;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a>

functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#functions CloudGcpDmIntegrations#functions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#id CloudGcpDmIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnect`<sup>Optional</sup> <a name="interconnect" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.interconnect"></a>

```typescript
public readonly interconnect: CloudGcpDmIntegrationsInterconnect;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a>

interconnect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#interconnect CloudGcpDmIntegrations#interconnect}

---

##### `istio`<sup>Optional</sup> <a name="istio" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.istio"></a>

```typescript
public readonly istio: CloudGcpDmIntegrationsIstio;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a>

istio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#istio CloudGcpDmIntegrations#istio}

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.kubernetes"></a>

```typescript
public readonly kubernetes: CloudGcpDmIntegrationsKubernetes;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#kubernetes CloudGcpDmIntegrations#kubernetes}

---

##### `loadBalancing`<sup>Optional</sup> <a name="loadBalancing" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.loadBalancing"></a>

```typescript
public readonly loadBalancing: CloudGcpDmIntegrationsLoadBalancing;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a>

load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#load_balancing CloudGcpDmIntegrations#load_balancing}

---

##### `managedKafka`<sup>Optional</sup> <a name="managedKafka" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.managedKafka"></a>

```typescript
public readonly managedKafka: CloudGcpDmIntegrationsManagedKafka;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a>

managed_kafka block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#managed_kafka CloudGcpDmIntegrations#managed_kafka}

---

##### `memCache`<sup>Optional</sup> <a name="memCache" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.memCache"></a>

```typescript
public readonly memCache: CloudGcpDmIntegrationsMemCache;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a>

mem_cache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#mem_cache CloudGcpDmIntegrations#mem_cache}

---

##### `memoryStore`<sup>Optional</sup> <a name="memoryStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.memoryStore"></a>

```typescript
public readonly memoryStore: CloudGcpDmIntegrationsMemoryStore;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a>

memory_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#memory_store CloudGcpDmIntegrations#memory_store}

---

##### `pubSub`<sup>Optional</sup> <a name="pubSub" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.pubSub"></a>

```typescript
public readonly pubSub: CloudGcpDmIntegrationsPubSub;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a>

pub_sub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#pub_sub CloudGcpDmIntegrations#pub_sub}

---

##### `redis`<sup>Optional</sup> <a name="redis" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.redis"></a>

```typescript
public readonly redis: CloudGcpDmIntegrationsRedis;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a>

redis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#redis CloudGcpDmIntegrations#redis}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.router"></a>

```typescript
public readonly router: CloudGcpDmIntegrationsRouter;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a>

router block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#router CloudGcpDmIntegrations#router}

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.run"></a>

```typescript
public readonly run: CloudGcpDmIntegrationsRun;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#run CloudGcpDmIntegrations#run}

---

##### `spanner`<sup>Optional</sup> <a name="spanner" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.spanner"></a>

```typescript
public readonly spanner: CloudGcpDmIntegrationsSpanner;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a>

spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#spanner CloudGcpDmIntegrations#spanner}

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.sql"></a>

```typescript
public readonly sql: CloudGcpDmIntegrationsSql;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a>

sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#sql CloudGcpDmIntegrations#sql}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.storage"></a>

```typescript
public readonly storage: CloudGcpDmIntegrationsStorage;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#storage CloudGcpDmIntegrations#storage}

---

##### `virtualMachines`<sup>Optional</sup> <a name="virtualMachines" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.virtualMachines"></a>

```typescript
public readonly virtualMachines: CloudGcpDmIntegrationsVirtualMachines;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a>

virtual_machines block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#virtual_machines CloudGcpDmIntegrations#virtual_machines}

---

##### `vpcAccess`<sup>Optional</sup> <a name="vpcAccess" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.vpcAccess"></a>

```typescript
public readonly vpcAccess: CloudGcpDmIntegrationsVpcAccess;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#vpc_access CloudGcpDmIntegrations#vpc_access}

---

### CloudGcpDmIntegrationsDataFlow <a name="CloudGcpDmIntegrationsDataFlow" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsDataFlow: cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsDataProc <a name="CloudGcpDmIntegrationsDataProc" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsDataProc: cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsDataStore <a name="CloudGcpDmIntegrationsDataStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsDataStore: cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseAppHosting <a name="CloudGcpDmIntegrationsFirebaseAppHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsFirebaseAppHosting: cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseAuth <a name="CloudGcpDmIntegrationsFirebaseAuth" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsFirebaseAuth: cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseDatabase <a name="CloudGcpDmIntegrationsFirebaseDatabase" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsFirebaseDatabase: cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseHosting <a name="CloudGcpDmIntegrationsFirebaseHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsFirebaseHosting: cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseStorage <a name="CloudGcpDmIntegrationsFirebaseStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsFirebaseStorage: cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseVertexAi <a name="CloudGcpDmIntegrationsFirebaseVertexAi" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsFirebaseVertexAi: cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirestore <a name="CloudGcpDmIntegrationsFirestore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsFirestore: cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFunctions <a name="CloudGcpDmIntegrationsFunctions" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsFunctions: cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsInterconnect <a name="CloudGcpDmIntegrationsInterconnect" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsInterconnect: cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsIstio <a name="CloudGcpDmIntegrationsIstio" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsIstio: cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsKubernetes <a name="CloudGcpDmIntegrationsKubernetes" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsKubernetes: cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsLoadBalancing <a name="CloudGcpDmIntegrationsLoadBalancing" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsLoadBalancing: cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsManagedKafka <a name="CloudGcpDmIntegrationsManagedKafka" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsManagedKafka: cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsMemCache <a name="CloudGcpDmIntegrationsMemCache" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsMemCache: cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsMemoryStore <a name="CloudGcpDmIntegrationsMemoryStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsMemoryStore: cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsPubSub <a name="CloudGcpDmIntegrationsPubSub" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsPubSub: cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsRedis <a name="CloudGcpDmIntegrationsRedis" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsRedis: cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsRouter <a name="CloudGcpDmIntegrationsRouter" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsRouter: cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsRun <a name="CloudGcpDmIntegrationsRun" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsRun: cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsSpanner <a name="CloudGcpDmIntegrationsSpanner" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsSpanner: cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsSql <a name="CloudGcpDmIntegrationsSql" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsSql: cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsStorage <a name="CloudGcpDmIntegrationsStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsStorage: cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsVirtualMachines <a name="CloudGcpDmIntegrationsVirtualMachines" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsVirtualMachines: cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsVpcAccess <a name="CloudGcpDmIntegrationsVpcAccess" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

const cloudGcpDmIntegrationsVpcAccess: cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudGcpDmIntegrationsAiPlatformOutputReference <a name="CloudGcpDmIntegrationsAiPlatformOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsAiPlatform;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a>

---


### CloudGcpDmIntegrationsAlloyDbOutputReference <a name="CloudGcpDmIntegrationsAlloyDbOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsAlloyDb;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a>

---


### CloudGcpDmIntegrationsApiGatewayOutputReference <a name="CloudGcpDmIntegrationsApiGatewayOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsApiGateway;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a>

---


### CloudGcpDmIntegrationsAppEngineOutputReference <a name="CloudGcpDmIntegrationsAppEngineOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsAppEngine;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a>

---


### CloudGcpDmIntegrationsBigQueryOutputReference <a name="CloudGcpDmIntegrationsBigQueryOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsBigQuery;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a>

---


### CloudGcpDmIntegrationsBigTableOutputReference <a name="CloudGcpDmIntegrationsBigTableOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsBigTable;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a>

---


### CloudGcpDmIntegrationsComposerOutputReference <a name="CloudGcpDmIntegrationsComposerOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsComposer;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a>

---


### CloudGcpDmIntegrationsDataFlowOutputReference <a name="CloudGcpDmIntegrationsDataFlowOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsDataFlow;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a>

---


### CloudGcpDmIntegrationsDataProcOutputReference <a name="CloudGcpDmIntegrationsDataProcOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsDataProc;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a>

---


### CloudGcpDmIntegrationsDataStoreOutputReference <a name="CloudGcpDmIntegrationsDataStoreOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsDataStore;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a>

---


### CloudGcpDmIntegrationsFirebaseAppHostingOutputReference <a name="CloudGcpDmIntegrationsFirebaseAppHostingOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsFirebaseAppHosting;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a>

---


### CloudGcpDmIntegrationsFirebaseAuthOutputReference <a name="CloudGcpDmIntegrationsFirebaseAuthOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsFirebaseAuth;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a>

---


### CloudGcpDmIntegrationsFirebaseDatabaseOutputReference <a name="CloudGcpDmIntegrationsFirebaseDatabaseOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsFirebaseDatabase;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a>

---


### CloudGcpDmIntegrationsFirebaseHostingOutputReference <a name="CloudGcpDmIntegrationsFirebaseHostingOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsFirebaseHosting;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a>

---


### CloudGcpDmIntegrationsFirebaseStorageOutputReference <a name="CloudGcpDmIntegrationsFirebaseStorageOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsFirebaseStorage;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a>

---


### CloudGcpDmIntegrationsFirebaseVertexAiOutputReference <a name="CloudGcpDmIntegrationsFirebaseVertexAiOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsFirebaseVertexAi;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a>

---


### CloudGcpDmIntegrationsFirestoreOutputReference <a name="CloudGcpDmIntegrationsFirestoreOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsFirestore;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a>

---


### CloudGcpDmIntegrationsFunctionsOutputReference <a name="CloudGcpDmIntegrationsFunctionsOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsFunctions;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a>

---


### CloudGcpDmIntegrationsInterconnectOutputReference <a name="CloudGcpDmIntegrationsInterconnectOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsInterconnect;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a>

---


### CloudGcpDmIntegrationsIstioOutputReference <a name="CloudGcpDmIntegrationsIstioOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsIstio;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a>

---


### CloudGcpDmIntegrationsKubernetesOutputReference <a name="CloudGcpDmIntegrationsKubernetesOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsKubernetes;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a>

---


### CloudGcpDmIntegrationsLoadBalancingOutputReference <a name="CloudGcpDmIntegrationsLoadBalancingOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsLoadBalancing;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a>

---


### CloudGcpDmIntegrationsManagedKafkaOutputReference <a name="CloudGcpDmIntegrationsManagedKafkaOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsManagedKafka;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a>

---


### CloudGcpDmIntegrationsMemCacheOutputReference <a name="CloudGcpDmIntegrationsMemCacheOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsMemCache;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a>

---


### CloudGcpDmIntegrationsMemoryStoreOutputReference <a name="CloudGcpDmIntegrationsMemoryStoreOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsMemoryStore;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a>

---


### CloudGcpDmIntegrationsPubSubOutputReference <a name="CloudGcpDmIntegrationsPubSubOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsPubSub;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a>

---


### CloudGcpDmIntegrationsRedisOutputReference <a name="CloudGcpDmIntegrationsRedisOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsRedis;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a>

---


### CloudGcpDmIntegrationsRouterOutputReference <a name="CloudGcpDmIntegrationsRouterOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsRouter;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a>

---


### CloudGcpDmIntegrationsRunOutputReference <a name="CloudGcpDmIntegrationsRunOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsRun;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a>

---


### CloudGcpDmIntegrationsSpannerOutputReference <a name="CloudGcpDmIntegrationsSpannerOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsSpanner;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a>

---


### CloudGcpDmIntegrationsSqlOutputReference <a name="CloudGcpDmIntegrationsSqlOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsSql;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a>

---


### CloudGcpDmIntegrationsStorageOutputReference <a name="CloudGcpDmIntegrationsStorageOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsStorage;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a>

---


### CloudGcpDmIntegrationsVirtualMachinesOutputReference <a name="CloudGcpDmIntegrationsVirtualMachinesOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsVirtualMachines;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a>

---


### CloudGcpDmIntegrationsVpcAccessOutputReference <a name="CloudGcpDmIntegrationsVpcAccessOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.Initializer"></a>

```typescript
import { cloudGcpDmIntegrations } from '@cdktn/provider-newrelic'

new cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.resetMetricsPollingInterval"></a>

```typescript
public resetMetricsPollingInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.metricsPollingIntervalInput"></a>

```typescript
public readonly metricsPollingIntervalInput: number;
```

- *Type:* number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.metricsPollingInterval"></a>

```typescript
public readonly metricsPollingInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGcpDmIntegrationsVpcAccess;
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a>

---



