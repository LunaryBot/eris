"use strict";

const Base = require("./Base");

/**
 * Represents a guild scheduled event
 * @prop {String} guildID The guild id which the scheduled event belongs to
 */
class GuildScheduledEvent extends Base {
    constructor(data, client) {
        super(data.id);

        this._client = client;

        this.guild = client.guilds.get(data.guild_id) || {id: data.guild_id};
        if(data.creator !== undefined) {
            this.creator = this._client.users.add(data.creator);
            this.creatorID = this.creator.id;
        } else if(data.creator_id !== undefined) {
            this.creator = this._client.users.get(data.creator_id);
            this.creatorID = data.creator_id;
        }
        this.update(data);
    }
    update(data) {
        if(data.channel_id !== undefined) {
            this.channelID = data.channel_id;
        }
        if(data.name !== undefined) {
            this.name = data.name;
        }
        if(data.description !== undefined) {
            this.description = data.description;
        }
        if(data.scheduled_start_time !== undefined) {
            this.scheduledStartTime = Date.parse(data.scheduled_start_time);
        }
        if(data.scheduled_end_time !== undefined) {
            this.scheduledEndTime = Date.parse(data.scheduled_end_time);
        }
        if(data.privacy_level !== undefined) {
            this.privacyLevel = data.privacy_level;
        }
        if(data.status !== undefined) {
            this.status = data.status;
        }
        if(data.entity_type !== undefined) {
            this.entityType = data.entity_type;
        }
        if(data.entity_id !== undefined) {
            this.entityID = data.entity_id;
        }
        if(typeof data.entity_metadata === "object") {
            this.location = data.entity_metadata.location;
        }
        if(data.user_count !== undefined) {
            this.userCount = data.user_count;
        }
        if(data.image !== undefined) {
            this.image = data.image;
        }
    }
    /**
     * Delete the guild scheduled event
     * @returns {Promise}
     */
    delete() {
        return this._client.deleteGuildScheduledEvent.call(this._client, this.guild.id, this.id);
    }
    /**
     * Modify the guild scheduled event. Returns the modified guild scheduled event object on success
     * @arg {Object} options The properties to edit
     * @returns {Promise<GuildScheduledEvent>}
     */
    edit(options) {
        return this._client.editGuildScheduledEvent.call(this._client, this.guild.id, this.id, options, options.reason);
    }
    /**
     * Get all subscribed users for the scheduled event
     * @arg {Object} options
     * @arg {Number} [options.limit] Number of users to return (up to maximum 100)
     * @arg {String} [options.before] Consider only users before given user id
     * @arg {String} [options.after] Consider only users after given user id
     * @returns {Promise<Array<Object>>}
     */
    getUsers(options) {
        return this._client.getGuildScheduledEventUsers.call(this._client, this.guild.id, this.id, options);
    }
}

module.exports = GuildScheduledEvent;
