// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

export class Vpc extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'aws-quickstart-vpc:index:Vpc';

    /**
     * Returns true if the given object is an instance of Vpc.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Vpc {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Vpc.__pulumiType;
    }

    /**
     * The IPs of the EIPs associated with the Nat Gateways
     */
    public /*out*/ readonly natGatewayIPs!: pulumi.Output<string[] | undefined>;
    /**
     * The IDs of the Private Subnets Created
     */
    public /*out*/ readonly privateSubnetIDs!: pulumi.Output<string[] | undefined>;
    /**
     * The IDs of the Public Subnets Created
     */
    public /*out*/ readonly publicSubnetIDs!: pulumi.Output<string[] | undefined>;
    /**
     * The VPC ID
     */
    public /*out*/ readonly vpcID!: pulumi.Output<string>;

    /**
     * Create a Vpc resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpcArgs, opts?: pulumi.ComponentResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.availabilityZoneConfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'availabilityZoneConfig'");
            }
            if ((!args || args.cidrBlock === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cidrBlock'");
            }
            inputs["availabilityZoneConfig"] = args ? args.availabilityZoneConfig : undefined;
            inputs["cidrBlock"] = args ? args.cidrBlock : undefined;
            inputs["createAdditionalPrivateSubnets"] = args ? args.createAdditionalPrivateSubnets : undefined;
            inputs["createFlowLogs"] = args ? args.createFlowLogs : undefined;
            inputs["createNatGateways"] = args ? args.createNatGateways : undefined;
            inputs["createPrivateSubnets"] = args ? args.createPrivateSubnets : undefined;
            inputs["createPublicSubnets"] = args ? args.createPublicSubnets : undefined;
            inputs["enableDnsHostnames"] = args ? args.enableDnsHostnames : undefined;
            inputs["enableDnsSupport"] = args ? args.enableDnsSupport : undefined;
            inputs["flowLogsLogFormat"] = args ? args.flowLogsLogFormat : undefined;
            inputs["flowLogsMaxAggregationInterval"] = args ? args.flowLogsMaxAggregationInterval : undefined;
            inputs["flowLogsRetentionPeriodInDays"] = args ? args.flowLogsRetentionPeriodInDays : undefined;
            inputs["flowLogsTrafficType"] = args ? args.flowLogsTrafficType : undefined;
            inputs["instanceTenancy"] = args ? args.instanceTenancy : undefined;
            inputs["natGatewayIPs"] = undefined /*out*/;
            inputs["privateSubnetIDs"] = undefined /*out*/;
            inputs["publicSubnetIDs"] = undefined /*out*/;
            inputs["vpcID"] = undefined /*out*/;
        } else {
            inputs["natGatewayIPs"] = undefined /*out*/;
            inputs["privateSubnetIDs"] = undefined /*out*/;
            inputs["publicSubnetIDs"] = undefined /*out*/;
            inputs["vpcID"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(Vpc.__pulumiType, name, inputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a Vpc resource.
 */
export interface VpcArgs {
    /**
     * The list of Configurations in which to create subnets. You can specify availability
     * zone with a private or a public subnet cidr block. You can also associated a private
     * subnet with a dedicated network ACL.
     */
    availabilityZoneConfig: inputs.AvailabilityZoneArgs[];
    /**
     * CIDR block for the VPC
     */
    cidrBlock: string;
    /**
     * Set to `true` to create a network ACL protected subnet in each Availability Zone. If `false`, the CIDR parameters for those subnets will be ignored.
     * If `true`, it also requires that the 'Create private subnets' parameter is also `true` to have any effect.
     * Default is `true`
     */
    createAdditionalPrivateSubnets?: boolean;
    /**
     * Enable Flow Logs to capture IP traffic for the VPC. Defaults to `true`
     */
    createFlowLogs?: boolean;
    /**
     * Set to `false` when creating only private subnets. If `true`, both CreatePublicSubnets and CreatePrivateSubnets must also be `true`.
     * Default is `true`
     */
    createNatGateways?: boolean;
    /**
     * Set to `false` to create only public subnets. If `false`, the CIDR parameters for ALL private subnets will be ignored.
     * Default is `true`.
     */
    createPrivateSubnets?: boolean;
    /**
     * Set to `false` to create only private subnets. If `false`, CreatePrivateSubnets must be `true` and the CIDR parameters for ALL public subnets will be
     * ignored. Default is `true`
     */
    createPublicSubnets?: boolean;
    /**
     * A boolean flag to enable/disable DNS hostnames in the VPC. Defaults `false`.
     */
    enableDnsHostnames?: boolean;
    /**
     * A boolean flag to enable/disable DNS support in the VPC. Defaults true.
     */
    enableDnsSupport?: boolean;
    /**
     * The fields to include in the flow log record, in the order in which they should appear. Specify the fields using the ${field-id} format,
     * separated by spaces. Default is
     * `${version} ${account-id} ${interface-id} ${srcaddr} ${dstaddr} ${srcport} ${dstport} ${protocol} ${packets} ${bytes} ${start} ${end} ${action} ${log-status}`
     */
    flowLogsLogFormat?: string;
    /**
     * The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. You can specify 60 seconds
     * (1 minute) or 600 seconds (10 minutes). Default is `600`
     */
    flowLogsMaxAggregationInterval?: number;
    /**
     * Number of days to retain the VPC Flow Logs in CloudWatch. Defaults to `14`.
     */
    flowLogsRetentionPeriodInDays?: number;
    /**
     * The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic.
     * Default is `REJECT`.
     */
    flowLogsTrafficType?: string;
    /**
     * The allowed tenancy of instances launched into the VPC. Defaults to `default`.
     */
    instanceTenancy?: string;
}
