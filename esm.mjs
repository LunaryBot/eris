import Eris from "./index.js";

export default function(token, options) {
  return new Eris.Client(token, options);
}

export const {
  AutocompleteInteraction,
  AutomodRule,
  Base,
  Bucket,
  CategoryChannel,
  Channel,
  Client,
  Collection,
  Command,
  CommandClient,
  CommandInteraction,
  ComponentInteraction,
  Constants,
  DiscordHTTPError,
  DiscordRESTError,
  ExtendedUser,
  Guild,
  GuildChannel,
  GuildIntegration,
  GuildPreview,
  GuildScheduledEvent,
  GuildTemplate,
  Interaction,
  Invite,
  Member,
  Message,
  ModalSubmitInteraction,
  NewsChannel,
  NewsThreadChannel,
  Permission,
  PermissionOverwrite,
  PingInteraction,
  PrivateChannel,
  PrivateThreadChannel,
  PublicThreadChannel,
  RequestHandler,
  Role,
  SequentialBucket,
  Shard,
  SharedStream,
  StageChannel,
  StageInstance,
  TextChannel,
  ThreadChannel,
  ThreadMember,
  UnavailableGuild,
  UnknownInteraction,
  User,
  VERSION,
  VoiceChannel,
  VoiceConnection,
  VoiceConnectionManager,
  VoiceState
} = Eris;
