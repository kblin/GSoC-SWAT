<%doc>
#
# Share Index Mako Template file for SWAT
#
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 3 of the License, or
# (at your option) any later version.
#   
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#   
# You should have received a copy of the GNU General Public License
# 
</%doc>
<%inherit file="/default/base/base.mako" />
<%namespace name="toolbar" file="/default/component/toolbar.mako" />

${parent.action_title(c.config.get_action_info('friendly_name'))}
${toolbar.write(c.config.get_toolbar_items())}

${share_table(c.share_list)}

<%doc></%doc>
<%def name="page_title()">
    ${parent.page_title()} :: ${c.config.get_action_info('friendly_name')}
</%def>

<%def name="share_table(shares)">
    <table summary="${_('List of Shares for the current Samba Server')}" class="list" id="share-list">
	<thead>
	    <tr>
		<td><input title="${_('Check All Items')}" type="checkbox" id="check-all"/></td>
		<td>${_('#')}</td>
		<td style="width:100px;">${_('Name')}</td>
		<td style="width:200px;">${_('Path')}</td>
		<td style="width:252px;">${_('Comment')}</td>
		<td></td>
	    </tr>
	</thead>
	
	<tfoot>
	    <tr>
		<td colspan="6">		    
		    <div class="pagination">
			<p class="number-pages">${_('%d Shares Total' % len([]))}</p>
		    </div>
		</td>
	    </tr>
	</tfoot>                    
	
	<tbody>
	
	    <% i = 1 %>
	    
	    % for share in shares:
		<%
                
                tr_class = ''
                home_class = ''
                
                if share == 'homes':
                    home_class = ' home-directory ' %>
		
		% if i % 2 == 0:
		    <% tr_class += " alternate-row " %>
		% endif
		
		<tr id="row-${i}" title="${_('Edit Share')}" class="${tr_class}">
		    <td><input onchange="selectShareRow(this);" name="select_share${i}" type="checkbox" id="check-row-${i}" /></td>
		    <td>${i}</td>
		    <td class='${home_class}'>${share}</td>
		    <td>
			
			% if len(c.samba_lp.get('path', share)) > 0:
			    ${c.samba_lp.get('path', share)}
			% else:
			    ${_('No Path Defined or Required')}
			% endif
		    </td>
		    <td>
			% if c.samba_lp.get('comment', share):
			    ${c.samba_lp.get('comment', share)}
			% else:
			    ${_('No Comment Defined')}
			% endif
		    </td>
		    <td>
                        ${quick_tasks(share, False)}   
		    </td>                            
		</tr>
		
		<% i += 1 %>
	    
	    % endfor
	</tbody>
    </table>
</%def>
    
<%def name="quick_tasks(share_name, is_disabled=False)">
    <ul class="quick-tasks">
	<li><a href="${h.url_for('share_action', action = 'edit', name = share_name)}" title="${_('Edit Share')}"><img src="/default/images/icons/folder-pencil.png" alt="${_('Edit Share Icon')}"/></a></li>
	<li><a href="${h.url_for('share_action', action = 'remove', name = share_name)}" title="${_('Remove Share')}"><img src="/default/images/icons/folder-minus.png" alt="${_('Remove Share Icon')}"/></a></li>
	<li><a href="${h.url_for('share_action', action = 'copy', name = share_name)}" title="${_('Copy this Share')}"><img src="/default/images/icons/folders-plus.png" alt="${_('Copy Share Icon')}"/></a></li>
	<li><a href="${h.url_for('share_action', action = 'toggle', name = share_name)}" title="${_('Enable this Share')}"><img src="/default/images/icons/switch-plus.png" alt="${_('Enable Share Icon')}"/></a></li>
    </ul>
</%def>
